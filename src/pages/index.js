const IndexPage = ({ data }) => (
  <Base>
    <main id="main-content" tabIndex="-1" className="container tc sans-serif">
      <h1 className="mt5 pb4 f1">Gatsby Starter</h1>

      <Link to="/page-2/" className="link dib">
        Go to page 2
      </Link>

      <YamlExample data={data.allExampleYaml.edges} />
      <TemplateExample data={data.allTemplateYaml.edges} />

      <MountTransitionExample />
      <GSAPExample />
      <RevealExample data={data.allExampleYaml.edges} />

      <CollapseExample />

      <FilterExample
        category1={data.allCategory1Yaml.edges}
        category2={data.allCategory2Yaml.edges}
      />

      <FilterAndLimitExample
        cat1={data.allCategory1Yaml.edges}
        cat2={data.allCategory2Yaml.edges}
      />

      <LimitExample items={data.allExampleYaml.edges} />

      <GalleryAndLightboxExample
        portrait={data.allMediaPortraitYaml.edges}
        onstage={data.allMediaOnstageYaml.edges}
        video={data.allMediaVideoYaml.edges}
      />

      <ImageLightboxExample
        images={data.allLightboxImagesYaml.edges[0].node.images}
      />
      <VideoLightboxExample videos={data.allLightboxVideosYaml.edges} />

      <FadingCarouselExample data={data.allExampleYaml.edges} />
      {/* TODO: rewrite FlickityExample (causing an error in v2) */}
      {/* <FlickityExample data={data.allExampleYaml.edges} /> */}
      <SlickExample data={data.allExampleYaml.edges} />

      <EventsByUpcomingAndPastExample events={data.allEventsYaml.edges} />

      <BlockquotesExample />
      <IconsAndEmojisExample />

      <TwitterExample />
      <InstagramExample />

      {/* TODO: activate ONLY if site has a form (so Netlify doesn't register it unnecessarily) */}
      {/* <FormExample /> */}
      <p>(The Form example is hidden by default.)</p>

      <ScrollTo href="#top" className="link dib mb5">
        Back to top
      </ScrollTo>
    </main>
  </Base>
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
              fluid(maxWidth: 672) {
                ...GatsbyImageSharpFluid_withWebp
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
    allMediaPortraitYaml {
      edges {
        node {
          image {
            childImageSharp {
              thumbnail: sizes(maxWidth: 1760) {
                ...GatsbyImageSharpSizes_withWebp
              }
              lightbox: resolutions(width: 1500) {
                ...GatsbyImageSharpResolutions_withWebp
              }
            }
          }
          alt
          objPosition
          caption
          category
        }
      }
    }
    allMediaOnstageYaml {
      edges {
        node {
          image {
            childImageSharp {
              thumbnail: sizes(maxWidth: 1760) {
                ...GatsbyImageSharpSizes_withWebp
              }
              lightbox: resolutions(width: 1500) {
                ...GatsbyImageSharpResolutions_withWebp
              }
            }
          }
          alt
          objPosition
          caption
          category
        }
      }
    }
    allMediaVideoYaml {
      edges {
        node {
          video
          image {
            childImageSharp {
              thumbnail: sizes(maxWidth: 1760) {
                ...GatsbyImageSharpSizes_withWebp
              }
            }
          }
          alt
          objPosition
          caption
          category
        }
      }
    }
    allLightboxVideosYaml {
      edges {
        node {
          url
          image {
            childImageSharp {
              fluid(
                maxWidth: 500
                duotone: { highlight: "#9eebcf", shadow: "#192550" }
              ) {
                ...GatsbyImageSharpFluid_withWebp
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
              thumbnail: fluid(maxWidth: 925) {
                ...GatsbyImageSharpFluid_withWebp
              }
              lightbox: fixed(width: 1500) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
    allEventsYaml(sort: { fields: [lastDate], order: DESC }) {
      edges {
        node {
          title
          lastDate(formatString: "MMMM DD, YYYY")
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

import YamlExample from '../sections/examples/YamlExample'
import TemplateExample from '../sections/examples/TemplateExample'

import MountTransitionExample from '../sections/examples/MountTransitionExample'
import GSAPExample from '../sections/examples/GSAPExample'
import RevealExample from '../sections/examples/RevealExample'

import CollapseExample from '../sections/examples/CollapseExample'
import EventsByUpcomingAndPastExample from '../sections/examples/EventsByUpcomingAndPastExample'

// import ParallaxExample from '../sections/examples/wip/ParallaxExample'
// import ReactSpringExample from '../sections/examples/wip/ReactSpringExample'

import FilterExample from '../sections/examples/FilterExample'
import LimitExample from '../sections/examples/LimitExample'
import FilterAndLimitExample from '../sections/examples/FilterAndLimitExample'

import FadingCarouselExample from '../sections/examples/FadingCarouselExample'
import FlickityExample from '../sections/examples/FlickityExample'
import SlickExample from '../sections/examples/SlickExample'

import GalleryAndLightboxExample from '../sections/examples/GalleryAndLightboxExample'
import ImageLightboxExample from '../sections/examples/ImageLightboxExample'
import VideoLightboxExample from '../sections/examples/VideoLightboxExample'

import BlockquotesExample from '../sections/examples/BlockquotesExample'
import IconsAndEmojisExample from '../sections/examples/IconsAndEmojisExample'

import TwitterExample from '../sections/examples/TwitterExample'
import InstagramExample from '../sections/examples/InstagramExample'

// import FormExample from '../sections/examples/FormExample'

import ScrollTo from '../components/examples/ScrollTo'

export default IndexPage
