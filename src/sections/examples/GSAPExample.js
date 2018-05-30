class GSAPExample extends React.Component {
  // Waypoint handlers
  handleWaypointEnter = () => this.props.transition(`ANIMATE`)
  handleWaypointLeave = () => this.props.transition(`PAUSE`) // pauses when out of view

  // Button handlers
  handleStartAnimation = () => this.props.transition(`ANIMATE`)
  handlePauseAnimation = () => this.props.transition(`PAUSE`)
  handleKillAnimation = () => this.props.transition(`KILL`)

  // Imperative GSAP actions
  startAnimation = () => {
    loadjs.ready(`gsap`, () => {
      this.node.animation = TweenMax.to(this.node, 1.5, {
        scale: 0.9,
        ease: `Power2.easeInOut`,
        repeat: -1,
        yoyo: true
      })
    })
  }
  pauseAnimation = () => this.node.animation.pause()
  resumeAnimation = () => this.node.animation.resume()
  killAnimation = () => {
    this.node.animation.kill()
    TweenMax.set(this.node, { clearProps: `all` })
    this.node.animation = null
  }

  render() {
    // console.log(`🗺 GSAPExample state:`, this.props.machineState.value)

    return (
      <section ref={el => (this.node = el)}>
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        >
          <div className="mv6 bg-red pa5 shadow-lg">
            {/* Intro */}
            <h2>I'm an animated component</h2>
            <p className="mv4 ml-auto mr-auto measure-narrow lh-copy">
              I animate on scroll or by clicking the buttons below.
            </p>

            {/* Start Button */}
            <Action
              show={[`pauseAnimation`, `killAnimation`]}
              hide={[`startAnimation`, `resumeAnimation`]}
            >
              <button onClick={this.handleStartAnimation} className="ph3">
                Breathe!
              </button>
            </Action>

            {/* Pause Button */}
            <Action
              show={[`startAnimation`, `resumeAnimation`]}
              hide={[`pauseAnimation`, `killAnimation`]}
            >
              <button onClick={this.handlePauseAnimation} className="ph3">
                Pause breathing!
              </button>
            </Action>

            {/* End Button */}
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
