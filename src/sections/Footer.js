const Footer = () => (
  <footer className="bg-black pa3 tc white">
    <h1>I'm a footer</h1>
    <Copyright />
  </footer>
)

export default Footer

/*
 *
 * Imports
 * 
 */

import React from 'react'

/*
 *
 * Copyright
 * 
 */

import HyperLink from '../components/HyperLink'

const Copyright = () => (
  <p className="container pv4 ph3 lh-copy f6">
    &copy; {new Date().getFullYear()} Insert Site Name. All&nbsp;rights&nbsp;reserved.
    Brewed&nbsp;by&nbsp;
    <HyperLink href="http://coffeeshopcreative.ca" className="">
      Coffeeshop&nbsp;Creative
    </HyperLink>.
  </p>
)
