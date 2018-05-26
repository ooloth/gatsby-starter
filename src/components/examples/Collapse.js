class Collapse extends Component {
  state = { expanded: this.props.expanded || false }

  static propTypes = {
    // ...
    duration: PropTypes.number,
    ease: PropTypes.string,
    expanded: PropTypes.bool
  }

  static defaultProps = {
    duration: 1,
    ease: `Power3.easeInOut`,
    expanded: false
  }

  handleToggle = () => {
    this.state.expanded ? this.collapse() : this.expand()

    // this.props.transition(`TOGGLE`)
  }
  handleKeyUp = e => {
    e.key === `Enter` && this.handleToggle()
    // e.key === `Enter` && this.props.transition(`TOGGLE`)
  }

  expand = () => {
    loadjs.ready(`gsap`, () => {
      // Expand section to its natural height...
      TweenMax.set(this.node, {
        height: `auto`,
        autoAlpha: 1
      })

      // ...from a starting height of 0
      TweenMax.from(this.node, this.props.duration, {
        height: 0,
        autoAlpha: 0,
        ease: this.props.ease
      })

      this.setState({ expanded: true })
    })
  }

  collapse = () => {
    loadjs.ready(`gsap`, () => {
      // Collapse section height to 0
      TweenMax.to(this.node, this.props.duration, {
        height: 0,
        autoAlpha: 0,
        ease: this.props.ease
      })

      this.setState({ expanded: false })
    })
  }

  render() {
    const { renderContent, renderToggle, className = `` } = this.props
    const { expanded } = this.state

    return (
      <Fragment>
        <div
          ref={el => (this.node = el)}
          className={`overflow-hidden ${className}`}
          style={{ height: 0 }}
        >
          {renderContent()}
        </div>
        {renderToggle(expanded, this.handleToggle, this.handleKeyUp)}
      </Fragment>
    )
  }
}

/*
 *
 * Collapse State Chart
 * 
 */

const collapseChart = {
  initial: `collapsed`,
  states: {
    collapsed: {
      on: {
        TOGGLE: `expanded`
      }
    },

    expanded: {
      on: {
        TOGGLE: `collapsed`
      }
    }
  }
}

/*
 *
 * Imports & Exports
 * 
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import loadjs from 'loadjs'

export default Collapse

/*

USAGE:

<Collapse
  renderContent={() => <CollapsedContent />}
  renderToggle={(expanded, handleToggle, handleKeyUp) => (
    <ToggleComponent 
      expanded={expanded} 
      handleToggle={handleToggle} 
      handleKeyUp={handleKeyUp}
    />
  )}
/>

NOTES:

1. Toggle allows for repeated expanding/collapsing, but can choose to only render toggle when expanded={false} in the renderToggle markup (don't need to add a prop for that)

*/