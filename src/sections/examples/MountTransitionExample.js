// TODO: see this for more ideas: https://github.com/reactjs/react-transition-group/issues/136

// TODO: the above may show how to use this for page transitions as well...

const MountTransitionExample = () => (
  <section className="mv6 bg-near-white pa5 shadow-lg">
    <h2 className="mb4">Mount & Unmount Transitions Example</h2>
    <p className="mb5">I trigger GSAP animations when I enter and exit</p>
    <AnimatingBoxes />
  </section>
)

/* 
 *
 * Animating Boxes
 * 
 */

class AnimatingBoxes extends Component {
  state = { in: false, boxes: [`box`] }

  addBox = () => this.setState({ boxes: this.state.boxes.concat(`box`) })

  removeBox = () =>
    this.setState({ boxes: this.state.boxes.slice(0, this.state.boxes.length - 1) })

  enterAnim = rtgChild => {
    loadjs.ready(`gsap`, () => {
      TweenMax.from(rtgChild, 0.5, {
        scale: 0,
        ease: `Power3.easeInOut`
      })
    })
  }

  exitAnim = rtgChild => {
    loadjs.ready(`gsap`, () => {
      let tl = new TimelineMax()
      tl
        // Transition the exiting element out
        .to(rtgChild, 0.5, {
          scale: 0,
          ease: `Power3.easeInOut`
        })
        // Collapse the remaining space gradually
        .to(
          rtgChild,
          0.4,
          {
            margin: 0,
            borderWidth: 0,
            padding: 0,
            lineHeight: 0,
            fontSize: 0,
            ease: `Power3.easeInOut`
          },
          `-=0.2`
        )
    })
  }

  render() {
    const { boxes } = this.state

    return (
      <Fragment>
        <TransitionGroup component={null}>
          {boxes.map((box, index) => (
            <Transition
              key={index} // "in" prop is passed automatically by TransitionGroup
              appear={true}
              onEnter={this.enterAnim}
              onExit={this.exitAnim}
              timeout={{ enter: 500, exit: 700 }} // required unless addEndListener is used
            >
              <p className="mv2 ml-auto mr-auto w5 b--black bw2 bg-pink pa4">box</p>
            </Transition>
          ))}
        </TransitionGroup>

        <div>
          <button onClick={this.addBox} className="btn mt4 mr2">
            +
          </button>
          <button onClick={this.removeBox} className="btn ml2">
            -
          </button>
        </div>
      </Fragment>
    )
  }
}

/* 
 *
 * Imports & Exports
 * 
 */

import React, { Component, Fragment } from 'react'
import loadjs from 'loadjs'
import Transition from 'react-transition-group/Transition'
import TransitionGroup from 'react-transition-group/TransitionGroup'

export default MountTransitionExample
