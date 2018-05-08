// TODO: I'm partway through trying to use refs and scaleY (and reverse scale the text content so it doesn't look weird. If I go back to height, go back to just using transitionChild)

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
  animContainer = React.createRef()
  animChild = React.createRef()

  componentDidMount = () => {
    loadjs.ready(`gsap`, () => {
      !this.state.in && this.setState({ in: true })
    })
  }

  expand = transitionChild => {
    console.log(`transitionChild`, transitionChild)
    console.log(`this.animContainer`, this.animContainer.current)
    loadjs.ready(`gsap`, () => {
      TweenMax.fromTo(
        this.animContainer.current,
        1,
        {
          // height: `auto`
          scaleY: 0
        },
        {
          // height: `8rem`,
          scaleY: 1,
          ease: `Power3.easeInOut`
        }
      )
      // Invert the expanding animation so the text won't be distorted
      TweenMax.fromTo(
        this.animChild.current,
        1,
        {
          // height: `auto`
          scaleY: 2
        },
        {
          // height: `8rem`,
          scaleY: 1,
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
        <div
          ref={this.animContainer}
          className="flex justify-center items-center ml-auto mr-auto bg-pink w4 h4"
        >
          <p ref={this.animChild}>Hi</p>
        </div>
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
