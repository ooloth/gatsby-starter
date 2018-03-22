/*
 *
 * GSAP Test
 * 
 */

// DOCS: https://greensock.com/get-started-js
// DOCS: https://greensock.com/docs/TweenMax
// DOCS: https://greensock.com/docs/TimelineMax

// TODO: see https://greensock.com/forums/topic/15749-gsap-with-create-react-app/
// NOTE: Node with ref needs to be outside the Waypoint component

// EXAMPLE: https://codepen.io/osublake/pen/0d4742d2200d028ed42297cb874af2b5?editors=0010

// DOCS: https://github.com/muicss/loadjs#documentation

class GSAPExample extends React.Component {
  state = { revealed: false, repeat: true, animation: null }

  componentDidMount = () => {
    // Load GSAP asynchronously from CDN
    if (!loadjs.isDefined('gsap')) {
      loadjs('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js', 'gsap', {
        success: () => console.log('👍 GSAP is loaded')
      })
    }
  }

  handleWaypointEnter = () => {
    // Only animate if it hasn't been revealed yet (or has been reset to animate again)
    if (!this.state.revealed) {
      this.setState({ revealed: true })
      this.animate()
    }
  }

  handleWaypointLeave = () => {
    // If animation should repeat on next reveal, reset it when leaves viewport
    if (this.state.revealed && this.state.repeat) {
      this.setState({ revealed: false })
      this.killAnimation()
    }
  }

  animate = () => {
    loadjs.ready('gsap', () => {
      TweenMax.to(this.box, 1.5, {
        scale: 0.9,
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
          <div className="mv6 bg-red pa5 shadow-lg">
            <h2>I'm an animated component</h2>
            <p className="mv4 ml-auto mr-auto measure-narrow lh-copy">
              I animate on scroll or by clicking the buttons below.
            </p>
            <button onClick={this.animate} className="pr4">
              Breathe!
            </button>
            <button onClick={this.killAnimation}>Stop breathing!</button>
          </div>
        </Waypoint>
      </div>
    )
  }
}

export default GSAPExample

/*
 *
 * Imports
 * 
 */

import React from 'react'
import Waypoint from 'react-waypoint'
import loadjs from 'loadjs'

// TODO: abstract the TweenMax.to() component above into a separate <Animate /> component? Or adapt <Reveal /> to be either .from() or .to()...?
// const GSAPTest2 = () => {
//   <Reveal
//   css={{ opacity: 0, transform: `translateY(40px) scale(.8)` }}
//     delay={index * 0.3 + 0.1}
//     duration={1}
//     offsetTop={-100}
//   >

//   </Reveal>
// }

/*
 *
 * Reveal Test
 * 
 */
