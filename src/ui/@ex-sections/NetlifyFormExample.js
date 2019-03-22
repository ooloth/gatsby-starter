function NetlifyFormExample() {
  return (
    <Section>
      <h2>Netlify Form</h2>
      <Code>useNetlifyForm, useMachine</Code>
      <NetlifyForm />
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

///////////////////////////////////////////////////////////////////////////////////

function NetlifyForm() {
  const [state, send] = useMachine(netlifyFormMachine)

  function handleChange(e) {
    send({ type: `UPDATE_FIELD`, name: e.target.name, value: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    send(`SUBMIT`)
  }

  return (
    <>
      {state.value !== `success` && (
        <form netlify="true" name="Contact" onSubmit={handleSubmit}>
          {/* Hidden fields required by Netlify */}
          <input type="hidden" name="form-name" value="Contact" />
          <input type="hidden" name="name" />
          <input type="hidden" name="email" />
          <textarea
            name="message"
            css={`
              display: none;
            `}
          />

          <Label htmlFor="name">Name*</Label>
          <Input
            id="name"
            name="name"
            type="text"
            aria-label="Name"
            placeholder="Peter Gelb"
            onChange={handleChange}
            required
          />

          <Label htmlFor="email">Email*</Label>
          <Input
            id="email"
            name="email"
            type="email"
            aria-label="Email address"
            placeholder="pgelb@metopera.org"
            onChange={handleChange}
            title={`The portion of the email address after the @ is invalid.`}
            pattern={emailRegex}
            required
          />

          <Label htmlFor="message">Message*</Label>
          <Textarea
            id="message"
            name="message"
            aria-label="Message"
            placeholder="Let's work together!"
            onChange={handleChange}
            rows="9"
            required
          />

          {state.value === `error` && (
            <AlertText>
              Oops! Something went wrong... Please confirm each field contains valid
              content and try again.
            </AlertText>
          )}

          <Submit type="submit">Send message</Submit>
        </form>
      )}

      {/* TODO: update client name */}
      {state.value === `success` && (
        <AlertText>
          Thanks for your message! Alaina will be in touch with you soon.
        </AlertText>
      )}
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const emailRegex = `.+@.+..+`

const Label = styled.label`
  display: block;
  padding-top: var(--s5);
  padding-bottom: var(--s1);
`

const Input = styled.input`
  ${input}
`

const Textarea = styled.textarea`
  ${input}
  resize: vertical;
`

const AlertText = styled.p`
  display: block;
  margin: var(--s5) 0;
  background: var(--light-pink);
  padding: var(--s2);
  line-height: 1.4;
`

const Submit = styled.button`
  margin-top: var(--s5);
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import useMachine from '../../logic/examples/useMachine'
import { netlifyFormMachine } from '../../logic/examples/netlifyForm'
import { input } from '../../styles'

export default NetlifyFormExample
