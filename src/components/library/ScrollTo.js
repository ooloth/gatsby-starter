class ScrollTo extends React.Component {
  state = {
    duration:
      this.props.duration > 1 ? this.props.duration / 1000 : this.props.duration || 1.5,
    easing: this.props.easing || 'Power3.easeInOut'
  }

  componentDidMount = () => {
    // Load GSAP's TweenMax asynchronously from CDN
    if (!loadjs.isDefined('gsap')) {
      loadjs('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js', 'gsap', {
        success: () => console.log('👍 GSAP is loaded')
      })
    }

    // Load GSAP's ScrollToPlugin asynchronously from CDN
    if (!loadjs.isDefined('scrollToPlugin')) {
      loadjs(
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/plugins/ScrollToPlugin.min.js',
        'scrollToPlugin',
        {
          success: () => console.log('👍 ScrollToPlugin is loaded')
        }
      )
    }
  }

  scrollToTop = e => {
    e.preventDefault()
    loadjs.ready(['gsap', 'scrollToPlugin'], () => {
      console.log('Here we go!')
      TweenMax.to(window, this.state.duration, {
        scrollTo: { y: this.props.href, autoKill: true },
        ease: this.state.easing
      })
    })
  }

  render() {
    return (
      <a
        href={this.props.href}
        onClick={this.scrollToTop}
        class={`${
          this.props.class
            ? this.props.class
            : this.props.className ? this.props.className : ''
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
