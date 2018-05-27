// Create the URL encoding for the form submission
const encode = data => {
  console.log(`data`, data)
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`)
}

class FormNetlify2 extends React.Component {
  state = {
    notSent: true,
    sentSuccessfully: false
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()

    // Check fetch support before submitting (polyfill loads in gatsby-browser if needed)
    if (typeof window.fetch !== `undefined` || loadjs.ready(`fetch`)) {
      this.submitForm()
    }
  }

  submitForm = () => {
    fetch(`/`, {
      method: `POST`,
      headers: { 'Content-Type': `application/x-www-form-urlencoded` },
      body: encode({ 'form-name': `Basic 2`, ...this.state })
    })
      .then(response => {
        console.log(`success: ${response}`)
        this.setState({ notSent: false, sentSuccessfully: true })
      })
      .catch(error => console.log(`error: ${error}`))
  }

  render() {
    return (
      <div>
        {/* Show the form until it has been submitted successfully */}
        {this.state.notSent && (
          <form
            name={this.props.name}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* This hidden input is required by Netlify */}
            <input type="hidden" name="form-name" value={this.props.name} />

            {this.props.renderFormFields(this.handleChange)}
          </form>
        )}

        {/* Hide form and show success message after form has submitted successfully */}
        {this.state.sentSuccessfully && this.props.renderSuccess()}
      </div>
    )
  }
}

/* 
 *
 * Imports & Exports
 * 
 */

// NOTE: code adapted from this: https://github.com/imorente/gatsby-netlify-form-example/blob/master/src/pages/contact.js

import React from 'react'
import loadjs from 'loadjs'
// import Textarea from 'react-textarea-autosize'

export default FormNetlify2
