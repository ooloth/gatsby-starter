function SecondPage({ data }) {
  return (
    <Base>
      <Metadata page={data.site.siteMetadata.secondPage} />

      <main id="main-content" tabIndex="-1" className="container tc sans-serif">
        <h1 className="pv4 f1">Hi from page 2</h1>

        <Link href="/" className="link dib mb4">
          Go back home
        </Link>
      </main>
    </Base>
  )
}

///////////////////////////////////////////////////////////////////////////////////

export const query = graphql`
  query {
    site {
      siteMetadata {
        secondPage {
          description
          title
          url
        }
      }
    }
  }
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { graphql } from 'gatsby'
import { Link } from '../ui/elements'

import Base from '../ui/Base'
import { Metadata } from '../ui/elements'

export default SecondPage
