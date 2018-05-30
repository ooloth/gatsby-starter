class Reveal extends React.Component {
  // Waypoint handlers
  handleWaypointEnter = () => this.props.transition(`REVEAL`)
  handleWaypointLeave = () => {
    const { reset, transition } = this.props
    reset ? transition(`RESET`) : transition(`DONE`)
  }

  // Imperative GSAP actions
  reveal = () => {
    const { css, delay, duration, ease } = this.props
    loadjs.ready(`gsap`, () => {
      // Clear inital style declarations
      TweenMax.set(this.node, { clearProps: `all` })

      // Tween from the styles in this.props.css to their natural values
      this.node.animation = TweenMax.from(this.node, duration || 1, {
        css: { ...css },
        ease: ease || `Power4.easeInOut`,
        delay: delay || 0.3
      })
    })
  }

  reset = () =>
    loadjs.ready(`gsap`, () => TweenMax.set(this.node, { ...this.props.css }))

  killAnimation = () => {
    this.node.animation.kill()
    TweenMax.set(this.node, { clearProps: `all` })
    this.node.animation = null
  }

  render() {
    // console.log(`🗺 Reveal:`, this.props.machineState.value)
    const { css, offsetTop, offsetBottom } = this.props

    return (
      <div ref={el => (this.node = el)} style={{ ...css }}>
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
          topOffset={offsetTop}
          bottomOffset={offsetBottom}
        >
          <div>{this.props.children}</div>
        </Waypoint>
      </div>
    )
  }
}

Reveal.propTypes = {
  css: PropTypes.object.isRequired,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ease: PropTypes.string,
  offsetTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offsetBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  reset: PropTypes.bool
}

/*
 *
 * Reveal State Chart
 * 
 */

const revealChart = {
  initial: `hidden`,
  states: {
    hidden: {
      on: {
        REVEAL: { revealed: { actions: [`reveal`] } }
      }
    },

    revealed: {
      on: {
        RESET: { hidden: { actions: [`reset`] } },
        DONE: { done: { actions: [`killAnimation`] } }
      }
    },

    done: {}
  }
}

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import loadjs from 'loadjs'
import { withStatechart } from 'react-automata'
import Waypoint from 'react-waypoint'

export default withStatechart(revealChart)(Reveal)

/*

INSTRUCTIONS:

<Reveal 
  css={object of CSS values for "from" tween, required}
  duration={number || string, optional}
  ease={string, optional}
  offsetTop={number || string, optional}
  offsetBottom={number || string, optional}
  reset={boolean, optional}
>
  <ComponentToReveal />
</Reveal>

1. The node with ref needs to be outside the Waypoint component (that's why the extra div)

*/
