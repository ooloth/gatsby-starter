function DialogExample() {
  const [state, send] = useMachine(dialogMachine)

  const rootRef = useRef(null)
  const transitions = useTransition(state.value === `open`, null, {
    from: { opacity: 0, y: 1, blur: 0 },
    enter: { opacity: 1, y: 0, blur: 8 },
    leave: { opacity: 0, y: -4, blur: 0 },
    // See: https://twitter.com/ryanflorence/status/1108436669433171968
    // See: https://gist.github.com/ryanflorence/03a4b3d314c0525f2d5bd79a32bb5ef2
    onFrame: (item, state, props) => {
      if (item) {
        if (!rootRef.current) {
          rootRef.current = document.getElementById('___gatsby')
        }
        rootRef.current.style.filter = `blur(${props.blur}px)`
      }
    },
    onRest: () => send('CLOSE_OVERLAY'), // must manually close after dialog is out
  })

  return (
    <Section>
      <h2>Dialog</h2>
      <Code>@reach/dialog, useMachine, dialogMachine, useTransition</Code>

      <OpenDialog onClick={() => send('OPEN')}>Open dialog</OpenDialog>

      {transitions.map(
        ({ item, key, props: { opacity, y } }) =>
          item && (
            <Overlay
              key={key}
              isOpen={state.value !== `closed`}
              onDismiss={() => send('CLOSE')}
              style={{ opacity: opacity }}
            >
              <Content
                style={{
                  transform: y.interpolate(y => `translate3d(0rem, ${y}rem, 0rem)`),
                }}
              >
                <Close onClick={() => send('CLOSE')}>Close dialog</Close>
                <p>Dialog content goes here...</p>
              </Content>
            </Overlay>
          )
      )}
    </Section>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Section = styled.section`
  padding: var(--s8) var(--s4) 0;
`

const Code = styled.code`
  display: inline-flex;
  margin-top: var(--s1);
  background-color: var(--lightest-blue);
  padding: var(--s1) 0;
`

const OpenDialog = styled.button`
  display: flex;
  margin-top: var(--s4);
`

const Overlay = styled(animated(DialogOverlay))`
  && {
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
`

const Content = styled(animated(DialogContent))`
  && {
    position: relative;
    box-shadow: var(--shadow5);
    overflow: hidden;
    padding: var(--s6) var(--s4);
    width: 90vw;
    max-width: var(--s14);
  }
`

const Close = styled.button`
  margin-bottom: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

import React, { useRef } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import { DialogOverlay, DialogContent } from '@reach/dialog'

// TODO: import this once per project:
// import '@reach/dialog/styles.css'

import useMachine from '../../logic/examples/useMachine'
import { dialogMachine } from '../../logic/examples/dialog'

export default DialogExample
