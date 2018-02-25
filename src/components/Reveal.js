// TODO: refactor this so that any child can be added inside it

/*
 *
 * Reveal component (using react-waypoint + gsap)
 * 
 */

// DOCS: https://greensock.com/get-started-js
// DOCS: https://greensock.com/docs/TweenMax
// DOCS: https://greensock.com/docs/TimelineMax

// TODO: see https://greensock.com/forums/topic/15749-gsap-with-create-react-app/
// TODO: see https://greensock.com/forums/topic/12093-react-and-gsap/?do=findComment&comment=66752

// NOTE: Node with ref needs to be outside the Waypoint component

// EXAMPLE: https://codepen.io/osublake/pen/0d4742d2200d028ed42297cb874af2b5?editors=0010

// DOCS: https://greensock.com/get-started-js
// DOCS: https://greensock.com/docs/TweenMax
// DOCS: https://greensock.com/docs/TimelineMax

// TODO: see https://greensock.com/forums/topic/15749-gsap-with-create-react-app/
// NOTE: Node with ref needs to be outside the Waypoint component

// EXAMPLE: https://codepen.io/osublake/pen/0d4742d2200d028ed42297cb874af2b5?editors=0010

// DOCS: https://github.com/muicss/loadjs#documentation

import Waypoint from 'react-waypoint'
import loadjs from 'loadjs'

// Load GSAP asynchronously from CDN
loadjs('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js', 'gsap', {
  success: () => console.log('GSAP is loaded!', new Date())
})

class Reveal extends React.Component {
  state = { revealed: false, repeat: true }

  handleWaypointEnter = () => {
    // Only animate if it hasn't been revealed yet (or has been reset to animate again)
    if (!this.state.revealed) {
      this.setState({ revealed: true })
      this.animate()
    }
  }

  handleWaypointLeave = () => {
    if (this.state.revealed && this.state.repeat) {
      this.setState({ revealed: false })
      this.killAnimation()
    }
  }

  animate = () => {
    loadjs.ready('gsap', () => {
      TweenMax.to(this.box, 1.5, {
        scale: 0.75,
        ease: Power2.easeInOut,
        repeat: -1,
        yoyo: true
      })
    })
  }

  killAnimation = () => {
    loadjs.ready('gsap', () => TweenMax.killAll(this.box))
  }

  render() {
    return (
      <div ref={el => (this.box = el)}>
        <Waypoint onEnter={this.handleWaypointEnter} onLeave={this.handleWaypointLeave}>
          <div class="mv6 bg-red pa5 shadow-lg">
            <h2>I'm an animated component</h2>
            <p class="mv4 ml-auto mr-auto measure-narrow lh-copy">
              I load GSAP asychronously from a CDN to keep the bundle size small and the
              loading time quick.) I animate on scroll or by clicking the buttons below.
            </p>
            <button onClick={this.animate} class="pr4">
              Shrink!
            </button>
            <button onClick={this.killAnimation}>Stop shrinking!</button>
          </div>
        </Waypoint>
      </div>
    )
  }
}

export default Reveal

/*
 *
 * Imports
 * 
 */

import React from 'react'
import Waypoint from 'react-waypoint'
