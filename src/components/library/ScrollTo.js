class ScrollTo extends React.Component {
  state = {
    duration:
      this.props.duration > 1 ? this.props.duration / 1000 : this.props.duration || 1.5,
    easing: this.props.easing || `Power3.easeInOut`
  }

  componentDidMount = () => {
    // Load GSAP's ScrollToPlugin asynchronously from CDN
    loadjs(
      `https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/plugins/ScrollToPlugin.min.js`,
      `scrollToPlugin`
    )
  }

  scrollToId = e => {
    const { href, offset = 0 } = this.props
    const { duration, easing } = this.state

    e.preventDefault()
    loadjs.ready([`gsap`, `scrollToPlugin`], () => {
      // Need to include {autoKill: false} to prevent iOS from killing the scroll partway
      // See: https://greensock.com/forums/topic/15108-ios-10-scrolltoplugin/

      const scroll = TweenMax.to(window, duration, {
        scrollTo: { y: href, offsetY: offset, autoKill: false },
        ease: easing
      })
    })
  }

  render() {
    return (
      <a
        href={this.props.href}
        onClick={this.scrollToId}
        className={`${
          this.props.class
            ? this.props.class
            : this.props.className
              ? this.props.className
              : ``
        }`}
      >
        {this.props.children}
      </a>
    )
  }
}

export default ScrollTo

/*
 *
 * Imports
 * 
 */

import React from 'react'
import loadjs from 'loadjs'
