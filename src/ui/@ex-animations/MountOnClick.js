function RevealOnClickExample() {
  return (
    <Section>
      <h2>Reveal on Click</h2>
      <Code>opacity, transformY, scale</Code>
      <RevealWithCSS />
      <RevealWithGSAP />
      <RevealWithReactSpring />
      <RevealWithPose />
    </Section>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Section = styled.section`
  padding: var(--s8) var(--s4);
`

const Code = styled.code`
  display: inline-flex;
  margin-top: var(--s1);
  background-color: var(--lightest-blue);
  padding: var(--s1) 0;
`

///////////////////////////////////////////////////////////////////////////////////

function RevealWithCSS() {
  const [revealed, setRevealed] = React.useState(true)

  return (
    <>
      <Heading>CSS</Heading>
      <button onClick={() => setRevealed(!revealed)}>
        {revealed ? `Hide` : `Show`}
      </button>
      <CSSItem revealed={revealed}>Box</CSSItem>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Heading = styled.h3`
  padding-top: var(--s6);
`

const Item = styled.div`
  transform-origin: bottom;
  margin-top: var(--s4);
  background-color: var(--light-pink);
  padding: var(--s4);
`

const CSSItem = styled(Item)`
  transform: ${p => (p.revealed ? `scale(1)` : `scale(0.9)`)};
  visibility: ${p => (p.revealed ? `visible` : `hidden`)};
  opacity: ${p => (p.revealed ? 1 : 0)};
  transition: all 1s cubic-bezier(0.5, 0, 0, 1);
`

///////////////////////////////////////////////////////////////////////////////////

function RevealWithGSAP() {
  const [revealed, setRevealed] = React.useState(true)
  const itemRef = React.useRef()

  function toggleRevealed() {
    loadjs.ready(`gsap`, () => {
      if (revealed) {
        TweenLite.to(itemRef.current, 0.6, {
          autoAlpha: 0,
          scale: 0.9,
          ease: `Power3.easeOut`
        })
      } else {
        TweenLite.to(itemRef.current, 0.6, {
          autoAlpha: 1,
          scale: 1,
          ease: `Power3.easeOut`
        })
      }

      setRevealed(!revealed)
    })
  }

  return (
    <>
      <Heading>GSAP</Heading>
      <button onClick={() => toggleRevealed()}>
        {revealed ? `Hide` : `Show`}
      </button>
      <Item ref={itemRef}>Box</Item>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

function RevealWithReactSpring() {
  const [revealed, setRevealed] = React.useState(true)

  const animatedStyles = useSpring({
    opacity: revealed ? 1 : 0,
    transform: revealed ? `scale(1)` : `scale(0.9)`
  })

  return (
    <>
      <Heading>React Spring</Heading>
      <button onClick={() => setRevealed(!revealed)}>
        {revealed ? `Hide` : `Show`}
      </button>
      <ReactSpringItem style={animatedStyles}>Box</ReactSpringItem>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const ReactSpringItem = animated(Item)

///////////////////////////////////////////////////////////////////////////////////

function RevealWithPose() {
  const [revealed, setRevealed] = React.useState(true)

  return (
    <>
      <Heading>Pose</Heading>
      <button onClick={() => setRevealed(!revealed)}>
        {revealed ? `Hide` : `Show`}
      </button>
      <PosedItem pose={revealed ? 'revealed' : 'hidden'}>Box</PosedItem>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const PosedItem = posed(Item)({
  hidden: {
    opacity: 0,
    transform: `scale(0.9)`,
    transition: { type: 'spring', stiffness: 170, damping: 26 }
  },
  revealed: {
    opacity: 1,
    transform: `scale(1)`,
    transition: { type: 'spring', stiffness: 170, damping: 26 }
  }
})

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'
import loadjs from 'loadjs'
import { useSpring, animated } from 'react-spring'
import posed from 'react-pose'

export default RevealOnClickExample
