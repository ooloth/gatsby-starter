const MountTransitionExample = () => (
  <section className="mv6 pv5 bg-near-white">
    <h2 className="mb4">Mount Transition Example</h2>
    <p className="mb5">I trigger a GSAP animation once I'm loaded</p>
    <AnimatingBox />
  </section>
)

/* 
 *
 * Animating Box
 * 
 */

// TODO: see this for more ideas: https://github.com/reactjs/react-transition-group/issues/136
// TODO: the above may show how to use this for page transitions as well...

class AnimatingBox extends Component {
  state = { in: false }

  componentDidMount = () => {
    loadjs.ready(`gsap`, () => {
      !this.state.in && this.setState({ in: true })
    })
  }

  expand = transitionChild => {
    loadjs.ready(`gsap`, () => {
      TweenMax.fromTo(
        transitionChild,
        1,
        {
          height: `auto`
        },
        {
          height: `8rem`,
          ease: `Power3.easeInOut`
        }
      )
    })
  }

  render() {
    return (
      <Transition
        in={this.state.in}
        onEnter={this.expand}
        timeout={1000}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <div className="flex justify-center items-center ml-auto mr-auto bg-pink w4">Hi</div>
      </Transition>
    )
  }
}

/* 
 *
 * Imports & Exports
 * 
 */

import React, { Component } from 'react'
import loadjs from 'loadjs'
import Transition from 'react-transition-group/Transition'

export default MountTransitionExample
