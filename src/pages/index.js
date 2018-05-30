const IndexPage = ({ data }) => (
  <main id="main-content" className="container tc">
    <h1 className="pv4 f1">Gatsby Starter</h1>

    <Link to="/page-2/" className="link dib">
      Go to page 2
    </Link>

    <YamlExample data={data.allExampleYaml.edges} />
    <TemplateExample data={data.allTemplateYaml.edges} />

    <MountTransitionExample />
    <GSAPExample />
    <RevealExample data={data.allExampleYaml.edges} />

    <ReadMoreExample />
    <CollapseExample />

    <FilterExample
      category1={data.allCategory1Yaml.edges}
      category2={data.allCategory2Yaml.edges}
    />

    <FilterAndLimitExample
      category1={data.allCategory1Yaml.edges}
      category2={data.allCategory2Yaml.edges}
    />

    <FlickityExample data={data.allExampleYaml.edges} />
    <SlickExample data={data.allExampleYaml.edges} />

    <ImageLightboxExample images={data.allLightboxImagesYaml.edges[0].node.images} />
    <VideoLightboxExample videos={data.allLightboxVideosYaml.edges} />

    <IconsExample />

    {/* <ReactSpringExample /> */}

    <TwitterExample />
    <InstagramExample />
    {/* <ParallaxExample /> */}

    <FormExample />

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
    allExampleYaml {
      edges {
        node {
          image {
            childImageSharp {
              sizes(maxWidth: 1000) {
                ...GatsbyImageSharpSizes_withWebp
              }
            }
          }
          alt
          title
          description
          link
        }
      }
    }
    allTemplateYaml {
      edges {
        node {
          title
          slug
        }
      }
    }
    allCategory1Yaml {
      edges {
        node {
          text
        }
      }
    }
    allCategory2Yaml {
      edges {
        node {
          text
        }
      }
    }
    allLightboxVideosYaml {
      edges {
        node {
          url
          image {
            childImageSharp {
              sizes(
                maxWidth: 500
                duotone: { highlight: "#9eebcf", shadow: "#192550" }
              ) {
                ...GatsbyImageSharpSizes_withWebp
              }
            }
          }
        }
      }
    }
    allLightboxImagesYaml {
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

import YamlExample from '../sections/examples/YamlExample'
import TemplateExample from '../sections/examples/TemplateExample'

import MountTransitionExample from '../sections/examples/MountTransitionExample'
import GSAPExample from '../sections/examples/GSAPExample'
import RevealExample from '../sections/examples/RevealExample'

import ReadMoreExample from '../sections/examples/ReadMoreExample'
import CollapseExample from '../sections/examples/CollapseExample'
// import ParallaxExample from '../sections/examples/ParallaxExample'
// import ReactSpringExample from '../sections/examples/ReactSpringExample'

import FilterExample from '../sections/examples/FilterExample'
import FilterAndLimitExample from '../sections/examples/FilterAndLimitExample'

import FlickityExample from '../sections/examples/FlickityExample'
import SlickExample from '../sections/examples/SlickExample'

import ImageLightboxExample from '../sections/examples/ImageLightboxExample'
import VideoLightboxExample from '../sections/examples/VideoLightboxExample'

import IconsExample from '../sections/examples/IconsExample'

import TwitterExample from '../sections/examples/TwitterExample'
import InstagramExample from '../sections/examples/InstagramExample'

import FormExample from '../sections/examples/FormExample'

import ScrollTo from '../components/examples/ScrollTo'

export default IndexPage
