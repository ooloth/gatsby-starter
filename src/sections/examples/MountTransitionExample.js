// TODO: see this for more ideas: https://github.com/reactjs/react-transition-group/issues/136

// TODO: the above may show how to use this for page transitions as well...

const MountTransitionExample = () => (
  <section className="mv6 bg-near-white pa5 shadow-lg">
    <h2 className="mb4">Mount & Unmount Transitions Example</h2>

    {/* <h3 className="mb4">GSAP version</h3>
    <AnimatingBoxes />

    <h3 className="pt5 mb4">React Pose version</h3>
    <AnimatingPoses /> */}

    <h3 className="pt5 mb4">React Spring version</h3>
    <AnimatingSprings />
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
      <>
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
      </>
    )
  }
}

/*
 *
 * Animating Poses
 *
 */

class AnimatingPoses extends Component {
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
      <>
        <ul>
          {/* the "flipMove" prop determines if the space collapses after the animation completes or before */}
          <PoseGroup animateOnMount={true} flipMove={false}>
            {boxes.map(box => (
              <Box
                key={box.id}
                className="mv2 ml-auto mr-auto w-50 mw5 b--black bw2 bg-pink pa4"
              >
                box
              </Box>
            ))}
          </PoseGroup>
        </ul>

        {/* TIP: avoid margins right next to the mount animations (causes jank) */}
        <div>
          <button onClick={this.addBox} className="btn mt4 mr2">
            +
          </button>
          <button onClick={this.removeBox} className="btn ml2">
            -
          </button>
        </div>
      </>
    )
  }
}

const List = posed.ul()

const Box = posed.li({
  enter: {
    scale: 1
    // transition: { type: 'spring', stiffness: 500, damping: 29 }
  },
  exit: {
    scale: 0
    // transition: { duration: 0 }
  }
})

/*
 *
 * Animating Springs
 *
 */

function AnimatingSprings() {
  const [boxes, setBoxes] = useState([{ text: `box`, id: 1 }])

  function addBox() {
    setBoxes(boxes => [...boxes, { text: `box`, id: shortid.generate() }])
  }

  function removeBox() {
    setBoxes(boxes.slice(0, boxes.length - 1))
  }

  return (
    <>
      <Transition
        native
        items={boxes}
        keys={box => box.id}
        from={{
          margin: 0,
          borderWidth: 0,
          padding: 0,
          lineHeight: 0,
          fontSize: 0,
          transform: 'scale(0)'
        }}
        enter={{
          margin: `0.5rem auto`,
          borderWidth: `.25rem`,
          padding: `2rem`,
          lineHeight: `1.15`,
          fontSize: `1rem`,
          height: `auto`,
          transform: 'scale(1)'
        }}
        leave={[
          { transform: 'scale(0)' },
          {
            margin: 0,
            borderWidth: 0,
            padding: 0,
            lineHeight: 0,
            fontSize: 0,
            height: 0
          }
        ]}
      >
        {box => props => (
          <animated.div
            className="mv2 ml-auto mr-auto w-50 mw5 b--black bw2 bg-pink pa4"
            style={props}
          >
            {box.text}
          </animated.div>
        )}
      </Transition>

      <div>
        <button onClick={addBox} className="btn mt4 mr2">
          +
        </button>
        <button onClick={removeBox} className="btn ml2">
          -
        </button>
      </div>
    </>
  )
}

/*
 *
 * Imports & Exports
 *
 */

import React, { Component, useState, memo } from 'react'
import posed, { PoseGroup } from 'react-pose'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import shortid from 'shortid'
import {
  Transition,
  Spring,
  animated,
  config,
  interpolate,
  useSpring
} from 'react-spring'

import Mount from '../../components/examples/Mount'

export default MountTransitionExample
