const SecondPage = ({ data }) => (
  <main id="main-content" className="container tc">
    <PageMetadata page={data.metadata.siteMetadata.secondPage} />
    <h1 className="pv4 f1">Hi from page 2</h1>
    <Link to="/" className="link dib mb4">
      Go back home
    </Link>
  </main>
)

export default SecondPage

/*
 *
 * General
 * 
 */

import React from 'react'
import Link from 'gatsby-link'

import PageMetadata from '../components/PageMetadata'

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
