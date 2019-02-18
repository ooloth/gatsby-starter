function PopUpExample() {
  const [state, send] = useMachine(popUpMachine)

  useEffect(() => {
    send('OPEN')
  }, [send])

  const transitions = useTransition(state.value === `open`, null, {
    from: { opacity: 0, transform: `translateY(1rem)` },
    enter: { opacity: 1, transform: `translateY(0rem)` },
    leave: { opacity: 0, transform: `translateY(-4rem)` },
    onRest: () => send('CLOSE_OVERLAY'), // must manually close after dialog is out
  })

  return (
    <Section>
      <h2>Pop Up</h2>
      <Code>@reach/dialog, useMachine, popUpMachine, useTransition</Code>

      <Text>
        This pop-up will appear once per day in each browser after a 10 second delay.
      </Text>

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Overlay
              key={key}
              isOpen={state.value !== `closed`}
              onDismiss={() => send('CLOSE')}
              style={{ opacity: props.opacity }}
            >
              <Content style={{ transform: props.transform }}>
                <Close onClick={() => send('CLOSE')}>
                  <SrText>Close</SrText>
                  <Times />
                </Close>

                <p>Pop-up content goes here...</p>
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

///////////////////////////////////////////////////////////////////////////////////

const Code = styled.code`
  display: inline-flex;
  margin-top: var(--s1);
  background-color: var(--lightest-blue);
  padding: var(--s1) 0;
`

///////////////////////////////////////////////////////////////////////////////////

const OpenDialog = styled.button`
  display: flex;
  margin-top: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

const Overlay = styled(animated(DialogOverlay))`
  && {
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
    background-color: hsla(0, 100%, 100%, 0.9);
  }
`

///////////////////////////////////////////////////////////////////////////////////

const Content = styled(animated(DialogContent))`
  && {
    position: relative;
    box-shadow: var(--shadow5);
    overflow: hidden;
    border-radius: var(--r5);
    padding: var(--s6) var(--s4);
    width: 90vw;
    max-width: var(--s14);
  }
`

///////////////////////////////////////////////////////////////////////////////////

const Close = styled.button`
  position: absolute;
  top: var(--s4);
  right: var(--s4);
  margin-bottom: var(--s3);
  border: none;
  background-color: transparent;
  font-size: var(--f6);
`

///////////////////////////////////////////////////////////////////////////////////

const Times = styled(TimesSVG)`
  width: 1em;
  height: 1em;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--light-pink);
  }
`

///////////////////////////////////////////////////////////////////////////////////

const Text = styled.p`
  padding-top: var(--s4);
  ${copy}
`

///////////////////////////////////////////////////////////////////////////////////

import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import { DialogOverlay, DialogContent } from '@reach/dialog'

// TODO: import this once per project:
// import '@reach/dialog/styles.css'

import { SrText } from '../elements'
import useMachine from '../../logic/examples/useMachine'
import { popUpMachine } from '../../logic/examples/popUp'
import { ReactComponent as TimesSVG } from '../../svg/times.svg'
import { copy } from '../../styles'

export default PopUpExample
