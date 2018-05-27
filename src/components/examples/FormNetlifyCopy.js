class FormNetlifyCopy extends React.Component {
  // Input change event handler (save input values to state)
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  // Form submission event handler (check for fetch support before submitting)
  handleSubmit = e => {
    e.preventDefault()
    if (typeof window.fetch !== `undefined`) this.props.transition(`SUBMIT`)
    else console.log(`🚧 Fetch is not supported in this browser.`)
  }

  // Create the encoded URL for the form submission
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
    console.log(`FormNetlifyCopy:`, this.props.machineState.value)

    return (
      <Fragment>
        {/* Show the form until it submits successfully */}
        <State value={`!success`}>
          <form
            name={this.props.name}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value={this.props.name} />

            {this.props.renderFormFields(this.handleChange)}

            {/* Will this prime Netlify to notice the Textarea component? */}
            <textarea type="hidden" name="message" className="dn" />

            {/* <input
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
            </button> */}
          </form>
        </State>

        <State value="error">{this.props.renderError()}</State>
        <State value="success">{this.props.renderSuccess()}</State>
      </Fragment>
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

import React, { Fragment } from 'react'
import Textarea from 'react-textarea-autosize'
import { State, withStatechart } from 'react-automata'

export default withStatechart(formChart)(FormNetlifyCopy)
