const SecondPage = ({ data }) => (
  <main id="main-content" tabIndex="-1" className="container tc">
    <PageMetadata page={data.metadata.siteMetadata.secondPage} />
    <h1 className="pv4 f1">Hi from page 2</h1>
    <Link to="/" className="link dib mb4">
      Go back home
    </Link>
  </main>
)

/*
 *
 * Queries
 * 
 */

export const query = graphql`
  query SecondPageQuery {
    metadata: site {
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
import Link from 'gatsby-link'

import PageMetadata from '../components/PageMetadata'

export default SecondPage
