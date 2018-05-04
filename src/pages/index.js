import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <main id="main-content" className="container tc">
    <h1 className="pv4 f1">Hi people</h1>
    <Link to="/page-2/" className="link dib mb4">
      Go to page 2
    </Link>
    <DataExample data={data.allExampleJson.edges} />
    <GSAPExample />
    <RevealExample data={data.allExampleJson.edges} />
    <ScrollTo href="#top" className="link dib mb5">
      Back to top
    </ScrollTo>
  </main>
)

export default IndexPage

/*
 *
 * General
 * 
 */

import React from 'react'

import DataExample from '../sections/examples/DataExample'
import GSAPExample from '../sections/examples/GSAPExample'
import RevealExample from '../sections/examples/RevealExample'

import ScrollTo from '../components/examples/ScrollTo'

/*
 *
 * Queries
 * 
 */

export const query = graphql`
  query IndexPageQuery {
    allExampleJson {
      edges {
        node {
          image {
            childImageSharp {
              sizes(maxWidth: 1000) {
                ...GatsbyImageSharpSizes_withWebp
              }
            }
          }
          critical
          alt
          title
          description
          link
        }
      }
    }
  }
`
