class FormNetlifyCopy extends React.Component {
  state = {
    notSent: true,
    sentSuccessfully: false
  }

  // Input change event handler (save input values to state)
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  // Form submission event handler (check for fetch support before submitting)
  handleSubmit = e => {
    e.preventDefault()

    if (typeof window.fetch !== `undefined`) this.props.transition(`SUBMIT`)
    else console.log(`🚧 Fetch is not supported in this browser.`)
  }

  // Create the URL encoding for the form submission
  createURL = data =>
    Object.keys(data)
      .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
      .join(`&`)

  // Send the form
  sendForm = () => {
    fetch(`/`, {
      method: `POST`,
      headers: { 'Content-Type': `application/x-www-form-urlencoded` },
      body: this.createURL({ 'form-name': this.props.name, ...this.state })
    })
      .then(() => this.props.transition(`SUCCESS`))
      .catch(error => {
        console.log(`🚧 Form submission error:`, error)
        this.props.transition(`ERROR`)
      })
  }

  render() {
    console.log(this.props.machineState.value)

    return (
      <div>
        {/* Show the form until it has been submitted successfully */}
        <State value={`!success`}>
          <form
            name="Basic Copy"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="Basic Copy" />

            <input
              aria-label="Enter your full name"
              type="text"
              name="name"
              placeholder="Full Name:"
              required
              onChange={this.handleChange}
              className="input mb4"
            />

            <input
              aria-label="Enter your email address"
              type="email"
              name="email"
              placeholder="Email:"
              required
              title="The domain portion of the email address is invalid (the portion after the @)."
              pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
              onChange={this.handleChange}
              className="input mb4"
            />

            <Textarea
              aria-label="Enter your message"
              minRows={5}
              name="message"
              placeholder="Message:"
              required
              onChange={this.handleChange}
              className="input span-3 mb4"
              style={{ resize: `none` }}
            />

            <button type="submit" className="group relative bg-near-white">
              <span
                className="flex-auto flex justify-center items-center pl3 courier f5 near-black"
                style={{ paddingRight: `6.5rem`, height: `60px` }}
              >
                Send message
              </span>
            </button>
          </form>
        </State>

        {/* Hide form and show success message after form has submitted successfully */}
        <State value="success">
          <div className="ml-auto lg:ml0 mr-auto courier lh-copy tc lg:tl measure-narrow">
            Success! Thanks for getting in touch. <br className="dn lg:di" />Aria
            will get back to you soon!
          </div>
        </State>
      </div>
    )
  }
}

/* 
 *
 * Form State Chart
 * 
 */

const formChart = {
  initial: `start`,
  states: {
    start: {
      on: { SUBMIT: `sending` }
    },

    sending: {
      onEntry: `sendForm`,
      on: {
        ERROR: `error`,
        SUCCESS: `success`
      }
    },

    error: {
      on: { SUBMIT: `sending` }
    },

    success: {}
  }
}

/* 
 *
 * Imports & Exports
 * 
 */

// NOTE: code adapted from this: https://github.com/imorente/gatsby-netlify-form-example/blob/master/src/pages/contact.js

import React from 'react'
// import loadjs from 'loadjs'
import Textarea from 'react-textarea-autosize'
import { State, withStatechart } from 'react-automata'

export default withStatechart(formChart)(FormNetlifyCopy)
