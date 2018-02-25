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

class Reveal extends React.Component {
  state = { revealed: false, repeat: true }

  handleWaypointEnter = () => {
    console.log(`Entered!`)
    if (!this.state.revealed) {
      this.setState({ revealed: true })
      console.log('Animation started.')
    }
  }

  handleWaypointLeave = () => {
    console.log(`Exited!`)
    if (this.state.revealed && this.state.repeat) {
      this.setState({ revealed: false })
    }
  }

  waitForGsapToLoad = () => {
    if (!window.TweenMax) {
      const timer = setInterval(() => {
        if (window.TweenMax) {
          console.log('Ready!', window.TweenMax)
          clearInterval(timer)
          this.startAnimation()
        }
      }, 1000)
    }
  }

  animate = () => {
    if (!window.TweenMax) {
      this.waitForGsapToLoad()
    } else {
      startAnimation()
    }
  }

  startAnimation = () => {
    TweenMax.to(this.box, 1.5, {
      scale: 0.75,
      ease: Power2.easeInOut,
      repeat: -1,
      yoyo: true
    })
  }

  killAnimation = () => {
    if (window.TweenMax) {
      TweenMax.killAll(this.box)
      console.log('Animation stopped.')
    }
  }

  render() {
    this.state.revealed ? this.animate() : this.killAnimation()
    return (
      <div ref={el => (this.box = el)}>
        <Waypoint
          ref={el => (this.box = el)}
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        >
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
