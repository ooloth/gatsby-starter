function AccordionsExample() {
  return (
    <Section>
      <h2>Accordions</h2>
      <Code>overflow, opacity, height</Code>
      <AccordionWithCSS />
      <AccordionWithGSAP />
      <AccordionWithReactSpring />
      <AccordionWithPose />
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

function AccordionWithCSS() {
  return (
    <Heading>
      CSS{' '}
      <span aria-label="doesn't work" role="img">
        ❌
      </span>
    </Heading>
  )
}

///////////////////////////////////////////////////////////////////////////////////

function AccordionWithGSAP() {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef()

  function toggleOpen() {
    loadjs.ready(`gsap`, () => (open ? collapse() : expand()))
  }

  function expand() {
    // Expand section to its natural height...
    TweenLite.set(ref.current, {
      height: `auto`,
      autoAlpha: 1
    })

    // ...from a starting height of 0
    TweenLite.from(ref.current, 1.4, {
      height: 0,
      autoAlpha: 0,
      ease: `Power3.easeInOut`
    })

    setOpen(true)
  }

  function collapse() {
    // Collapse section height to 0
    TweenLite.to(ref.current, 1.4, {
      height: 0,
      autoAlpha: 0,
      ease: `Power3.easeInOut`
    })

    setOpen(false)
  }

  return (
    <>
      <Heading>
        GSAP{' '}
        <span aria-label="works" role="img">
          ✅
        </span>
      </Heading>

      <button onClick={() => toggleOpen()}>{open ? `Close` : `Open`}</button>

      <div ref={ref} css="overflow: hidden; height: 0" style={{ height: 0 }}>
        <Paragraphs />
      </div>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Heading = styled.h3`
  padding-top: var(--s6);
`

///////////////////////////////////////////////////////////////////////////////////

function AccordionWithReactSpring() {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef()
  const { height } = useMeasure(ref)

  const containerStyles = useSpring({
    opacity: open ? 1 : 0,
    height: open ? height : 0,
    config: { mass: 2, tension: 70, friction: 22 }
  })

  return (
    <>
      <Heading>
        React Spring{' '}
        <span aria-label="works" role="img">
          ✅
        </span>
      </Heading>

      <button onClick={() => setOpen(!open)}>{open ? `Close` : `Open`}</button>

      <Container style={containerStyles}>
        <div ref={ref}>
          <Paragraphs />
        </div>
      </Container>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Container = styled(animated.div)`
  overflow: hidden;
`

///////////////////////////////////////////////////////////////////////////////////

function AccordionWithPose() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Heading>
        Pose{' '}
        <span aria-label="works" role="img">
          ✅
        </span>
      </Heading>

      <button onClick={() => setOpen(!open)}>{open ? `Close` : `Open`}</button>

      <StyledContent pose={open ? 'open' : 'closed'}>
        <Paragraphs />
      </StyledContent>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Content = posed.div({
  closed: {
    opacity: 0,
    height: 0,
    transition: { type: 'spring', mass: 2, stiffness: 70, damping: 22 }
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: { type: 'spring', mass: 2, stiffness: 70, damping: 22 }
  }
})

const StyledContent = styled(Content)`
  overflow: hidden;
`

///////////////////////////////////////////////////////////////////////////////////

function Paragraphs() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores suscipit
        in mollitia voluptatum facilis eius ea tempora quas fugiat omnis
        consequuntur dolorum quos soluta rerum delectus officiis dicta, eum
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores suscipit
        in mollitia voluptatum facilis eius ea tempora quas fugiat omnis
        consequuntur dolorum quos soluta rerum delectus officiis dicta, eum
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores suscipit
        in mollitia voluptatum facilis eius ea tempora quas fugiat omnis
        consequuntur dolorum quos soluta rerum delectus officiis dicta, eum
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores suscipit
        in mollitia voluptatum facilis eius ea tempora quas fugiat omnis
        consequuntur dolorum quos soluta rerum delectus officiis dicta, eum
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores suscipit
        in mollitia voluptatum facilis eius ea tempora quas fugiat omnis
        consequuntur dolorum quos soluta rerum delectus officiis dicta, eum
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores suscipit
        in mollitia voluptatum facilis eius ea tempora quas fugiat omnis
        consequuntur dolorum quos soluta rerum delectus officiis dicta, eum
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores suscipit
        in mollitia voluptatum facilis eius ea tempora quas fugiat omnis
        consequuntur dolorum quos soluta rerum delectus officiis dicta, eum
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores suscipit
        in mollitia voluptatum facilis eius ea tempora quas fugiat omnis
        consequuntur dolorum quos soluta rerum delectus officiis dicta, eum
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores suscipit
        in mollitia voluptatum facilis eius ea tempora quas fugiat omnis
        consequuntur dolorum quos soluta rerum delectus officiis dicta, eum
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores suscipit
        in mollitia voluptatum facilis eius ea tempora quas fugiat omnis
        consequuntur dolorum quos soluta rerum delectus officiis dicta, eum
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores suscipit
        in mollitia voluptatum facilis eius ea tempora quas fugiat omnis
        consequuntur dolorum quos soluta rerum delectus officiis dicta, eum
        praesentium.
      </p>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'
import loadjs from 'loadjs'
import { useSpring, animated, config } from 'react-spring'
import posed from 'react-pose'

import useMeasure from '../../logic/examples/useMeasure'

export default AccordionsExample
