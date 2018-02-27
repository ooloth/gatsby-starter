// TODO: refactor this so that any child can be added inside it

/*
 *
 * Reveal component (using react-waypoint + gsap)
 * 
 */

// DOCS: https://greensock.com/get-started-js
// DOCS: https://greensock.com/docs/TweenMax
// DOCS: https://greensock.com/docs/TimelineMax
// DOCS: https://github.com/muicss/loadjs#documentation

// see https://greensock.com/forums/topic/15749-gsap-with-create-react-app/
// see https://greensock.com/forums/topic/12093-react-and-gsap/?do=findComment&comment=66752
// see https://codepen.io/osublake/pen/0d4742d2200d028ed42297cb874af2b5?editors=0010

// NOTE: Node with ref needs to be outside the Waypoint component

class Reveal extends React.Component {
  state = {
    revealed: false,
    css: this.props.css,
    ease: this.props.ease || 'Power4.easeInOut',
    duration: this.props.duration > 50 ? this.props.duration / 1000 : this.props.duration || 1,
    delay: this.props.delay > 1 ? this.props.delay / 1000 : this.props.delay || 0.3,
    repeat: this.props.repeat === true ? -1 : this.props.repeat || 0,
    yoyo: this.props.yoyo || false
  }

  componentDidMount = () => {
    // Load GSAP asynchronously from CDN
    if (!loadjs.isDefined('gsap')) {
      loadjs('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js', 'gsap', {
        success: () => console.log('👍 GSAP is loaded')
      })
    }
  }

  handleWaypointEnter = () => {
    // Only animate when GSAP is ready and if it hasn't been revealed yet (or has been reset to animate again)
    // loadjs.ready('gsap', () => {
    if (!this.state.revealed) {
      this.setState({ revealed: true })
      this.reveal()
    }
    // })
  }

  handleWaypointLeave = () => {
    if (this.state.revealed && this.state.repeat) {
      this.setState({ revealed: false })
      this.reset()
    }
  }

  reveal = () => {
    loadjs.ready('gsap', () => {
      // Invalidate the temporary inline styles (which match the starting state for the animation and are added to prevent a flash of content in the ending position)
      this.box.style = null
      console.log('this.state.duration', this.state.duration)

      // Run the reveal animation
      TweenMax.from(this.box, this.state.duration, {
        css: { ...this.state.css },
        ease: this.state.ease,
        delay: this.state.delay,
        repeat: this.state.repeat,
        yoyo: this.state.yoyo
      })
    })
  }

  reset = () => {
    loadjs.ready('gsap', () => TweenMax.killAll(this.box))
  }

  render() {
    return (
      <div data-outer ref={el => (this.box = el)} style={{ ...this.state.css }}>
        <Waypoint onEnter={this.handleWaypointEnter} onLeave={this.handleWaypointLeave}>
          <div>{this.props.children}</div>
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
import loadjs from 'loadjs'
import Waypoint from 'react-waypoint'
