class Mount extends Component {
  enterAnim = rtgChild => {
    loadjs.ready(`gsap`, () => {
      let tl = new TimelineMax()
      tl
        // Expand the new space gradually
        .from(rtgChild, 0.4, {
          margin: 0,
          borderWidth: 0,
          padding: 0,
          lineHeight: 0,
          fontSize: 0,
          ease: `Power3.easeInOut`
        })
        // Transition the element in
        .from(
          rtgChild,
          0.5,
          {
            scale: 0,
            ease: `Power3.easeInOut`
          },
          `-=0.2`
        )
    })
  }

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
    })
  }

  render() {
    return (
      <Transition
        in={this.props.in}
        appear={true}
        onEnter={this.enterAnim}
        onExit={this.exitAnim}
        timeout={{ enter: 700, exit: 700 }} // required unless addEndListener is used
      >
        {this.props.children}
      </Transition>
    )
  }
}

Mount.propTypes = {
  in: PropTypes.bool // passed automatically by <TransitionGroup /> parent
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
