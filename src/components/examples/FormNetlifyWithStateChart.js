class FormNetlifyWithStateChart extends Component {
  static propTypes = {
    name: PropTypes.string,
    renderFormFields: PropTypes.func.isRequired,
    renderFetchError: PropTypes.func,
    renderSendError: PropTypes.func,
    renderSuccess: PropTypes.func
  }

  static defaultProps = {
    name: `Contact`
  }

  // Input change event handler (save input values to state)
  handleChange = e => {
    console.log(`this.state`, this.state)
    this.setState({ [e.target.name]: e.target.value })
  }

  // Form submission event handler (check for fetch support before submitting)
  handleSubmit = e => {
    e.preventDefault()

    if (typeof window.fetch !== `undefined` || loadjs.ready(`fetch`)) {
      this.props.transition(`SUBMIT`)
    } else {
      console.log(`🚧 Fetch is not supported in this browser.`)
    }
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
    console.log(`🗺 Form state:`, this.props.machineState.value)

    return (
      <Fragment>
        <State value={`!success`}>
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

// Article: https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
// Example: https://github.com/imorente/gatsby-netlify-form-example/blob/master/src/pages/contact.js

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import loadjs from 'loadjs'
import { State, withStatechart } from 'react-automata'

export default withStatechart(formChart)(FormNetlifyWithStateChart)
