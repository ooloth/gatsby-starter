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

IndexPage.propTypes = {
  data: PropTypes.object
}

export default IndexPage

/*
 *
 * General
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'

import DataExample from '../sections/library/DataExample'
import GSAPExample from '../sections/library/GSAPExample'
import RevealExample from '../sections/library/RevealExample'

import ScrollTo from '../components/library/ScrollTo'

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
