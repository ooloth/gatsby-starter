const SecondPage = ({ data }) => (
  <Base>
    <main id="main-content" tabIndex="-1" className="container tc">
      <PageMetadata page={data.metadata.siteMetadata.secondPage} />
      <h1 className="pv4 f1">Hi from page 2</h1>
      <Link to="/" className="link dib mb4">
        Go back home
      </Link>
    </main>
  </Base>
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
import { Link, graphql } from 'gatsby'

import Base from '../components/Base'
import PageMetadata from '../components/PageMetadata'

export default SecondPage
