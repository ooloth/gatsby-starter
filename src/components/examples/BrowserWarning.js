// NOTE: using this is a last resort if IE errors can't be resolved
// See KVP's Base.js for how to show it in IE only

const BrowserWarning = ({ title }) => (
  <main className="fade-in flex items-center container vh-100 pv6 sans-serif">
    <div style={{ maxWidth: `28rem`, letterSpacing: `-0.025rem` }}>
      <h2 className="f3 sm:f2 fw9">
        <span className="db pb4 f1 sm:f-4">Apologies.</span>
        This browser is outdated and no longer supported.
      </h2>

      <p className="pt4 measure lh-copy sm:f4">
        Please visit {title} in a modern browser like
        {` `}
        <Anchor
          href="https://www.google.com/chrome"
          className="blue underline animate hover:black"
        >
          Chrome
        </Anchor>
        ,{` `}
        <Anchor
          href="https://www.mozilla.org/en-GB/firefox/new"
          className="blue underline animate hover:black"
        >
          Firefox
        </Anchor>
        ,{` `}
        <Anchor
          href="https://support.apple.com/downloads/safari"
          className="blue underline animate hover:black"
        >
          Safari
        </Anchor>
        ,{` `}
        <Anchor
          href="https://www.microsoft.com/en-gb/windows/microsoft-edge"
          className="blue underline animate hover:black"
        >
          Edge
        </Anchor>
        , or
        {` `}
        <Anchor
          href="https://www.opera.com/download"
          className="blue underline animate hover:black"
        >
          Opera
        </Anchor>
        .
      </p>
    </div>
  </main>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'

import Anchor from './Anchor'

export default BrowserWarning
