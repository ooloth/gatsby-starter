const IndexPage = ({ data }) => (
  <main id="main-content" className="container tc">
    <h1 className="pv4 f1">Hi people</h1>
    <Link to="/page-2/" className="link dib mb4">
      Go to page 2
    </Link>
    <DataExample data={data.allExampleJson.edges} />
    <MountTransitionExample />
    <GSAPExample />
    <RevealExample data={data.allExampleJson.edges} />
    <ReadMoreExample />
    <ImageLightboxExample images={data.allLightboxImagesJson.edges[0].node.images} />
    {/* <ParallaxExample /> */}
    <TwitterExample />
    <InstagramExample />
    <ScrollTo href="#top" className="link dib mb5">
      Back to top
    </ScrollTo>
  </main>
)

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
    allLightboxImagesJson {
      edges {
        node {
          images {
            childImageSharp {
              thumbnail: sizes(maxWidth: 925) {
                ...GatsbyImageSharpSizes_withWebp
              }
              lightbox: resolutions(width: 1500) {
                ...GatsbyImageSharpResolutions_withWebp
              }
            }
          }
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

import DataExample from '../sections/examples/DataExample'
import MountTransitionExample from '../sections/examples/MountTransitionExample'
import GSAPExample from '../sections/examples/GSAPExample'
import RevealExample from '../sections/examples/RevealExample'
import ReadMoreExample from '../sections/examples/ReadMoreExample'
import ImageLightboxExample from '../sections/examples/ImageLightboxExample'
import ParallaxExample from '../sections/examples/ParallaxExample'
import TwitterExample from '../sections/examples/TwitterExample'
import InstagramExample from '../sections/examples/InstagramExample'

import ScrollTo from '../components/examples/ScrollTo'

export default IndexPage
