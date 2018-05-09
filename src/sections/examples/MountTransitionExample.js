// TODO: see this for more ideas: https://github.com/reactjs/react-transition-group/issues/136

// TODO: the above may show how to use this for page transitions as well...

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

class AnimatingBox extends Component {
  state = { in: false }

  // Refs
  // animContainer = React.createRef()
  // animChild = React.createRef()

  componentDidMount = () => {
    loadjs.ready(`gsap`, () => {
      !this.state.in && this.setState({ in: true })
    })
  }

  expand = transitionChild => {
    loadjs.ready(`gsap`, () => {
      TweenMax.to(transitionChild, 3, {
        rotationY: `360deg`,
        ease: `Power3.easeInOut`
      })
    })
  }

  render() {
    return (
      <Transition
        in={this.state.in}
        onEnter={this.expand}
        timeout={1000}
        // By default the child component is mounted immediately along with the parent Transition component. If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <p className="dib bg-pink pv4 ph5">Hi</p>
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
