class Mount extends Component {
  enterAnim = rtgChild => {
    const { animateSpace = true } = this.props

    loadjs.ready(`gsap`, () => {
      if (animateSpace) this.enterAnimSpaceAndItem(rtgChild)
      else this.enterAnimItemOnly(rtgChild)
    })
  }

  enterAnimSpaceAndItem = rtgChild => {
    let tl = new TimelineMax()
    tl.from(rtgChild, 0.4, spaceAnimation) // Expand the new space gradually
      .from(rtgChild, 0.5, itemAnimation, `-=0.2`) // Transition the element in
  }

  enterAnimItemOnly = rtgChild => TweenMax.from(rtgChild, 0.5, itemAnimation)

  exitAnim = rtgChild => {
    loadjs.ready(`gsap`, () => {
      let tl = new TimelineMax()
      tl
        // Transition the element out
        .to(rtgChild, 0.5, {
          scale: 0,
          ease: `Power3.easeInOut`
        })
        // Collapse the old space gradually
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

      // Release styles after animating out
      // TweenMax.set(rtgChild, { clearProps: `all` })
    })
  }

  render() {
    const { animateEnter = true, animateExit = true, appear = true } = this.props

    return (
      <Transition
        in={this.props.in}
        appear={appear}
        enter={animateEnter}
        onEnter={this.enterAnim}
        exit={animateExit}
        onExit={this.exitAnim}
        unmountOnExit={true}
        timeout={{ enter: 700, exit: 700 }} // required unless addEndListener is used
      >
        {this.props.children}
      </Transition>
    )
  }
}

Mount.propTypes = {
  animateEnter: PropTypes.bool,
  animateExit: PropTypes.bool,
  animateSpace: PropTypes.bool,
  appear: PropTypes.bool,
  in: PropTypes.bool // passed automatically by <TransitionGroup /> parent
}

/*
 *
 * Animations
 *
 */

const itemAnimation = {
  scale: 0,
  ease: `Power3.easeInOut`
}

const spaceAnimation = {
  margin: 0,
  borderWidth: 0,
  padding: 0,
  lineHeight: 0,
  fontSize: 0,
  ease: `Power3.easeInOut`
}

/* 
 *
 * Imports & Exports
 * 
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import loadjs from 'loadjs'
import Transition from 'react-transition-group/Transition'

export default Mount

/*

INSTRUCTIONS:

<TransitionGroup component={null}>
  {items.map(item => (
    <Mount key={item.id}>
      <Item item={item} />
    </Mount>
  ))}
</TransitionGroup>

1. Either wrap in TransitionGroup and a .map() of items (in which case TG sends "in" prop automatically)
2. Or, use alone and send "in" prop manually

*/
