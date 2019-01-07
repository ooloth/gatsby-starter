function SecondPage({ data }) {
  return (
    <Base>
      <Metadata page={data.site.siteMetadata.secondPage} />
      {/* <PageMetadata page={data.site.siteMetadata.secondPage} /> */}

      <main id="main-content" tabIndex="-1" className="container tc sans-serif">
        <h1 className="pv4 f1">Hi from page 2</h1>

        <Link to="/" className="link dib mb4">
          Go back home
        </Link>
      </main>
    </Base>
  )
}

/*
 *
 * Queries
 *
 */

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

/*
 *
 * Imports & Exports
 *
 */

import React from 'react'
import { Link, graphql } from 'gatsby'

import Base from '../components-sc/Base'
import Metadata from '../components/Metadata'
// import PageMetadata from '../components/PageMetadata'

export default SecondPage
