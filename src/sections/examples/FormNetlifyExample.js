const FormNetlifyExample = () => (
  <section className="mv6 bg-light-green pa5 shadow-lg">
    <h2 className="mb4">Original Form:</h2>
    <FormNetlify />

    <h2 className="mb4">Copy of Original Form:</h2>
    <FormNetlifyCopy
      name="Basic Copy"
      renderFormFields={handleChange => <FormFields handleChange={handleChange} />}
    />

    <h2 className="mb4">State Chart Form:</h2>

    <FormNetlifyWithStateChart
      name="Example Contact"
      renderFormFields={handleChange => <FormFields handleChange={handleChange} />}
      renderError={() => <Error />}
      renderSuccess={() => <Success />}
    />

    <h2 className="mb4">Experimental form:</h2>
    <FormNetlify2
      name="Basic 2"
      renderFormFields={handleChange => <FormFields handleChange={handleChange} />}
      // renderError={() => <Error />}
      renderSuccess={() => <Success />}
    />
  </section>
)

/* 
 *
 * Form Fields
 * 
 */

const FormFields = ({ handleChange }) => (
  <Fragment>
    <Input
      type="text"
      name="name"
      label="Enter your full name"
      placeholder="Full Name:"
      handleChange={handleChange}
      className="input mb4"
    />

    <Input
      type="email"
      name="email"
      label="Enter your email address"
      placeholder="Email:"
      handleChange={handleChange}
      className="input mb4"
    />

    {/* <textarea
      name="message1"
      placeholder="Message 1:"
      required
      onChange={handleChange}
      className="input mb4"
      style={{ resize: `none` }}
      rows="5"
    /> */}

    <Textarea
      aria-label="Enter your message"
      minRows={5}
      name="message"
      placeholder="Message:"
      required
      onChange={handleChange}
      className="input mb4"
      style={{ resize: `none` }}
    />

    <button type="submit" className="btn">
      Send message
    </button>
  </Fragment>
)

/* 
 *
 * Input
 * 
 */

// TODO: include label? wrapping the input or next to it? too layout-restrictive to include it?
const Input = ({ type, name, label, placeholder, handleChange, className = `` }) => (
  <input
    type={type}
    name={name}
    aria-label={label}
    placeholder={placeholder}
    onChange={handleChange}
    title={
      type === `email`
        ? `The portion of the email address after the @ is invalid.`
        : undefined
    }
    pattern={type === `email` ? emailRegex : undefined}
    className={className}
    required
  />
)

const emailRegex = `^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(.w{2,})+$`

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  className: PropTypes.string
}

/* 
 *
 * Send Error
 * 
 */

// TODO: Extract common classes into a Tailwinds component class
const Error = () => (
  <div className="ml-auto lg:ml0 mr-auto courier lh-copy tc lg:tl measure-narrow">
    Success! Thanks for getting in touch. <br className="dn lg:di" />Aria will get
    back to you soon!
  </div>
)

/* 
 *
 * Success
 * 
 */

// TODO: Extract common classes into a Tailwinds component class
const Success = () => (
  <div className="ml-auto lg:ml0 mr-auto courier lh-copy tc lg:tl measure-narrow">
    Success! Thanks for getting in touch. We'll get back to you soon!
  </div>
)

/*
 *
 * Imports & Exports
 * 
 */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Textarea from 'react-textarea-autosize'

import FormNetlify from '../../components/examples/FormNetlify'
import FormNetlifyCopy from '../../components/examples/FormNetlifyCopy'
import FormNetlify2 from '../../components/examples/FormNetlify2'
import FormNetlifyWithStateChart from '../../components/examples/FormNetlifyWithStateChart'

export default FormNetlifyExample
