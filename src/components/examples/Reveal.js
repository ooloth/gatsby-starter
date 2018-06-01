class Reveal extends Component {
  // Waypoint handlers
  handleWaypointEnter = () => this.props.transition(`REVEAL`)
  handleWaypointLeave = () =>
    this.props.reset ? this.props.transition(`RESET`) : this.props.transition(`DONE`)

  // Imperative GSAP actions
  reveal = () => {
    loadjs.ready(`gsap`, () => {
      TweenMax.set(this.node, { clearProps: `all` }) // Clear inital styles

      this.props.stagger ? this.animateFromStagger() : this.animateFrom()
    })
  }

  animateFrom = () => {
    const { css, delay, duration, ease } = this.props

    this.node.animation = TweenMax.from(this.node, duration || 1, {
      css: { ...css },
      ease: ease || `Power4.easeInOut`,
      delay: delay || 0.3
    })
  }

  animateFromStagger = () => {
    const { css, cycle, delay, duration, ease, staggerDelay } = this.props
    const nodes = this.node.childNodes[0].childNodes

    TweenMax.staggerFrom(
      nodes,
      duration || 1,
      {
        css: { ...css },
        cycle: cycle,
        delay: delay || 0.3,
        ease: ease || `Power4.easeInOut`
      },
      staggerDelay || 0.3
    )
  }

  wipeAnimation = () => {
    if (this.props.stagger) {
      this.node.childNodes[0].childNodes.forEach(node => {
        TweenMax.killTweensOf(node)
        TweenMax.set(node, { clearProps: `all` })
      })
    } else {
      TweenMax.killTweensOf(this.node)
      TweenMax.set(this.node, { clearProps: `all` })
    }
  }

  reset = () => {
    this.wipeAnimation()
    TweenMax.set(this.node, { ...this.props.css })
  }

  killAnimation = () => {
    this.wipeAnimation()
    TweenMax.set(this.node, { clearProps: `all` })
  }

  render() {
    // console.log(`🗺 Reveal:`, this.props.machineState.value)
    const {
      css,
      offsetTop,
      offsetBottom,
      className,
      style,
      tag,
      children
    } = this.props
    const Tag = tag || `div`

    return (
      <div ref={el => (this.node = el)} style={{ ...css }}>
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
          topOffset={offsetTop}
          bottomOffset={offsetBottom}
        >
          <Tag className={className} style={style}>
            {children}
          </Tag>
        </Waypoint>
      </div>
    )
  }
}

Reveal.propTypes = {
  css: PropTypes.object.isRequired,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ease: PropTypes.string,
  stagger: PropTypes.bool,
  staggerDelay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cycle: PropTypes.object,
  reset: PropTypes.bool,
  offsetTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offsetBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tag: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
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

import React, { Component } from 'react'
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
2. Use the className prop to set overflow-hidden on the inner wrapper (helpful sometimes, but it also kills all shadows)
3. Use the style prop to add styles to the inner wrapper

*/
