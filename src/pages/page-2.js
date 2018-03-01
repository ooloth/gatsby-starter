const SecondPage = ({ data }) => (
  <main id="main-content">
    <PageMetadata page={data.metadata.siteMetadata.secondPage} />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
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
