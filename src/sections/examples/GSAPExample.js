class GSAPExample extends React.Component {
  // Waypoint handlers
  handleWaypointEnter = () => this.props.transition(`ANIMATE`)
  handleWaypointLeave = () => this.props.transition(`PAUSE`)

  // Button handlers
  handleStartAnimation = () => this.props.transition(`ANIMATE`)
  handlePauseAnimation = () => this.props.transition(`PAUSE`)
  handleKillAnimation = () => this.props.transition(`KILL`)

  // Imperative GSAP methods
  startAnimation = () => {
    loadjs.ready(`gsap`, () => {
      this.box.animation = TweenMax.to(this.box, 1.5, {
        scale: 0.9,
        ease: `Power2.easeInOut`,
        repeat: -1,
        yoyo: true
      })
    })
  }

  pauseAnimation = () => loadjs.ready(`gsap`, () => this.box.animation.pause())

  resumeAnimation = () => loadjs.ready(`gsap`, () => this.box.animation.resume())

  killAnimation = () => {
    loadjs.ready(`gsap`, () => this.box.animation.kill())
    TweenMax.set(this.box, { clearProps: `all` })
    this.box.animation = null
  }

  render() {
    console.log(`🗺`, this.props.machineState.value)

    return (
      <section ref={el => (this.box = el)}>
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        >
          <div className="mv6 bg-red pa5 shadow-lg">
            <h2>I'm an animated component</h2>
            <p className="mv4 ml-auto mr-auto measure-narrow lh-copy">
              I animate on scroll or by clicking the buttons below.
            </p>

            <Action
              show={[`pauseAnimation`, `killAnimation`]}
              hide={[`startAnimation`, `resumeAnimation`]}
            >
              <button onClick={this.handleStartAnimation} className="ph3">
                Breathe!
              </button>
            </Action>

            <Action
              show={[`startAnimation`, `resumeAnimation`]}
              hide={[`pauseAnimation`, `killAnimation`]}
            >
              <button onClick={this.handlePauseAnimation} className="ph3">
                Pause breathing!
              </button>
            </Action>

            <Action
              show={[`startAnimation`, `resumeAnimation`, `pauseAnimation`]}
              hide={[`killAnimation`]}
            >
              <button onClick={this.handleKillAnimation} className="ph3">
                No more breathing!
              </button>
            </Action>
          </div>
        </Waypoint>
      </section>
    )
  }
}

/*
 *
 * Animation State Chart
 * 
 */

const animationChart = {
  initial: `idle`,
  states: {
    idle: {
      on: {
        ANIMATE: { animated: { actions: [`startAnimation`] } }
      }
    },

    animated: {
      on: {
        PAUSE: `paused`,
        KILL: `killed`
      }
    },

    paused: {
      onEntry: `pauseAnimation`,
      on: {
        ANIMATE: { animated: { actions: [`resumeAnimation`] } },
        KILL: `killed`
      }
    },

    killed: {
      onEntry: `killAnimation`,
      on: {
        ANIMATE: { animated: { actions: [`startAnimation`] } }
      }
    }
  }
}

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import Waypoint from 'react-waypoint'
import loadjs from 'loadjs'
import { Action, withStatechart } from 'react-automata'

export default withStatechart(animationChart)(GSAPExample)
