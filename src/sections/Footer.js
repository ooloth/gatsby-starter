const Footer = () => (
  <footer className="bg-black pa3 tc white">
    <h1>I'm a footer</h1>
    <Copyright />
  </footer>
)

/*
 *
 * Copyright
 * 
 */

const Copyright = () => (
  <p className="container pv4 ph3 lh-copy f6">
    &copy; {new Date().getFullYear()} Insert Site Name. All&nbsp;rights&nbsp;reserved.
    Brewed&nbsp;by&nbsp;
    <HyperLink href="http://coffeeshopcreative.ca" className="">
      Coffeeshop&nbsp;Creative
    </HyperLink>.
  </p>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'

import HyperLink from '../components/HyperLink'

export default Footer
