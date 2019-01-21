function BrowserWarning({ title }) {
  return (
    <>
      <Warning>
        <Box css={{ maxWidth: `28rem`, letterSpacing: `-0.025rem` }}>
          <Heading as="h1" fw={9} css="font-size: var(--f10); white-space: nowrap">
            Apologies.
          </Heading>

          <Heading pt={6} fw={8} css="font-size: var(--f8)">
            This browser is outdated and no longer supported.
          </Heading>

          <Text large pt={6}>
            Please visit {title} in a modern browser like
            {browsers.map((browser, i) => (
              <Fragment key={i}>
                {i < browsers.length - 1 ? ` ` : ` or `}

                <Link key={i} href={browser.href} inline>
                  {browser.text}
                </Link>

                {i < browsers.length - 2
                  ? `,`
                  : i === browsers.length - 1
                  ? `.`
                  : null}
              </Fragment>
            ))}
          </Text>
        </Box>
      </Warning>

      {/* TODO: if necessary (how to check?), activate hidden copy of Contact form (needed by Netlify's bots on first render) */}
      {/* <FormCopy /> */}
    </>
  )
}

const Warning = styled(Main)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6%;
  height: 100vh;
  text-align: center;
`

///////////////////////////////////////////////////////////////////////////////////

const browsers = [
  { href: 'https://www.google.com/chrome', text: 'Chrome' },
  { href: 'https://www.mozilla.org/en-GB/firefox/new', text: 'Firefox' },
  { href: 'https://support.apple.com/downloads/safari', text: 'Safari' },
  { href: 'https://www.microsoft.com/en-gb/windows/microsoft-edge', text: 'Edge' },
  { href: 'https://www.opera.com/download', text: 'Opera' }
]

///////////////////////////////////////////////////////////////////////////////////

// TODO: If using a Netlify form, update form name and form fields below

// const FormCopy = () => (
//  <aside>
//   <form
//     name="Contact"
//     data-netlify="true"
//     data-netlify-honeypot="bot-field"
//     className="dn"
//   >
//     {/* Form name */}
//     <input type="hidden" name="form-name" value="Contact" />

//     {/* Honeypot */}
//     <input name="bot-field" />

//     {/* Input copies to control input order in the submissions */}
//     <input type="text" name="Name" />
//     <input type="email" name="Email" />
//     <input type="tel" name="Phone" />
//     <textarea name="Address" />
//     <input type="checkbox" name="Services" />
//   </form>
//  </aside>
// )

///////////////////////////////////////////////////////////////////////////////////

import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Link, Box, Heading, Main, Text } from './elements'

export default BrowserWarning
