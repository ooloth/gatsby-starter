const IndexPage = ({ data }) => (
  <main id="main-content" className="container tc">
    <h1 className="pv4 f1">Hi people</h1>

    <Link to="/page-2/" className="link dib">
      Go to page 2
    </Link>

    <DataExample data={data.allExampleJson.edges} />
    <TemplateExample data={data.allTemplateJson.edges} />
    <MountTransitionExample />
    <GSAPExample />
    <RevealExample data={data.allExampleJson.edges} />
    <ReadMoreExample />
    <ImageLightboxExample images={data.allLightboxImagesJson.edges[0].node.images} />
    <VideoLightboxExample videos={data.allLightboxVideosJson.edges} />
    <TwitterExample />
    <InstagramExample />
    {/* <ParallaxExample /> */}
    {/* <ReactSpringExample /> */}

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
    allTemplateJson {
      edges {
        node {
          title
          slug
        }
      }
    }
    allLightboxVideosJson {
      edges {
        node {
          url
          image {
            childImageSharp {
              sizes(maxWidth: 500) {
                ...GatsbyImageSharpSizes_withWebp
              }
            }
          }
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
import TemplateExample from '../sections/examples/TemplateExample'
import MountTransitionExample from '../sections/examples/MountTransitionExample'
import GSAPExample from '../sections/examples/GSAPExample'
import RevealExample from '../sections/examples/RevealExample'
import ReadMoreExample from '../sections/examples/ReadMoreExample'
import ImageLightboxExample from '../sections/examples/ImageLightboxExample'
import VideoLightboxExample from '../sections/examples/VideoLightboxExample'
import TwitterExample from '../sections/examples/TwitterExample'
import InstagramExample from '../sections/examples/InstagramExample'
// import ParallaxExample from '../sections/examples/ParallaxExample'
// import ReactSpringExample from '../sections/examples/ReactSpringExample'

import ScrollTo from '../components/examples/ScrollTo'

export default IndexPage
