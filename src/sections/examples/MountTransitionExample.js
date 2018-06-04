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
  // These contrived "boxes" stand in for real list items like images, events, etc.
  state = { boxes: [{ text: `box`, id: 1 }] }

  addBox = () =>
    this.setState({
      boxes: this.state.boxes.concat({ text: `box`, id: shortid.generate() })
    })

  removeBox = () => {
    this.setState({ boxes: this.state.boxes.slice(0, this.state.boxes.length - 1) })
  }

  render() {
    const { boxes } = this.state

    return (
      <Fragment>
        <TransitionGroup component={null}>
          {boxes.map(box => (
            <Mount key={box.id}>
              <p className="mv2 ml-auto mr-auto w-50 mw5 b--black bw2 bg-pink pa4">
                box
              </p>
            </Mount>
          ))}
        </TransitionGroup>

        {/* TIP: avoid margins right next to the mount animations (causes jank) */}
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
import TransitionGroup from 'react-transition-group/TransitionGroup'
import shortid from 'shortid'

import Mount from '../../components/examples/Mount'

export default MountTransitionExample
