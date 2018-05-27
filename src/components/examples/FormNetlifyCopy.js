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
