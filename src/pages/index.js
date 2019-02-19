function IndexPage({ data }) {
  return (
    <Base>
      <main id="main-content">
        <AccordionExample />
        <DialogExample />
        <LimitExample />
        <PopUpExample />
        <ReadMoreExample />
        <VideoiFrameExample />
        <VideoThumbnailAndDialogExample video={data.allVideosYaml.edges[0].node} />

        {/* 
        <TemplateExample data={data.allTemplateYaml.edges} />

        <MountTransitionExample />
        <GSAPExample />
        <RevealExample data={data.allExampleYaml.edges} />
        <ReactSpringExample />

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

        <FadingCarouselExample data={data.allExampleYaml.edges} /> */}
        {/* TODO: rewrite FlickityExample (causing an error in v2) */}
        {/* <FlickityExample data={data.allExampleYaml.edges} /> */}
        {/* <SlickExample data={data.allExampleYaml.edges} /> */}

        {/* <EventsByUpcomingAndPastExample events={data.allEventsYaml.edges} />

        <BlockquotesExample />
        <SVGsAndEmojisExample />

        <TwitterExample />
        <InstagramExample /> */}

        {/* TODO: activate ONLY if site has a form (so Netlify doesn't register it unnecessarily) */}
        {/* <p className="pb5">(The Form example is hidden by default.)</p> */}
        {/* <FormikExample /> */}
        {/* <FormExample /> */}

        {/* <ScrollTo href="#top" className="link dib mb5">
          Back to top
        </ScrollTo> */}
      </main>
    </Base>
  )
}

///////////////////////////////////////////////////////////////////////////////////

export const query = graphql`
  query {
    allVideosYaml {
      edges {
        node {
          url
          image {
            file {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            alt
          }
        }
      }
    }

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
              thumbnail: fluid(maxWidth: 1760) {
                ...GatsbyImageSharpFluid_withWebp
              }
              lightbox: fixed(width: 1500) {
                ...GatsbyImageSharpFixed_withWebp
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
              thumbnail: fluid(maxWidth: 1760) {
                ...GatsbyImageSharpFluid_withWebp
              }
              lightbox: fixed(width: 1500) {
                ...GatsbyImageSharpFixed_withWebp
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
              thumbnail: fluid(maxWidth: 1760) {
                ...GatsbyImageSharpFluid_withWebp
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

    # allLightboxVideosYaml {
    #   edges {
    #     node {
    #       url
    #       image {
    #         childImageSharp {
    #           fluid(
    #             maxWidth: 500
    #             duotone: { highlight: "#9eebcf", shadow: "#192550" }
    #           ) {
    #             ...GatsbyImageSharpFluid_withWebp
    #           }
    #         }
    #       }
    #     }
    #   }
    #  }

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
          title {
            text
            lang
          }
          lastDate(formatString: "MMMM DD, YYYY")
        }
      }
    }

    # If manually marking events as upcoming/past:
    # upcomingEvents: allEventsYaml(filter: { upcoming: { eq: true } }) {
    #  edges {
    #    node {
    #      title
    #    }
    #  }
    #}

    # If I want to filter AND limit (fast than doing this later in JS):
    # allArticlesYaml(filter: { category: { eq: "press-releases" } }, limit: 3) {
    #   edges {
    #     node {
    #       title
    #     }
    #   }
    # }
  }
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { graphql } from 'gatsby'

import Base from '../ui/Base'
import AccordionExample from '../ui/@ex-sections/AccordionExample'
import DialogExample from '../ui/@ex-sections/DialogExample'
import LimitExample from '../ui/@ex-sections/LimitExample'
import PopUpExample from '../ui/@ex-sections/PopUpExample'
import ReadMoreExample from '../ui/@ex-sections/ReadMoreExample'
import VideoiFrameExample from '../ui/@ex-sections/VideoiFrameExample'
import VideoThumbnailAndDialogExample from '../ui/@ex-sections/VideoThumbnailAndDialogExample'

// import TemplateExample from '../sections/examples/TemplateExample'

// import MountTransitionExample from '../sections/examples/MountTransitionExample'
// import GSAPExample from '../sections/examples/GSAPExample'
// import RevealExample from '../sections/examples/RevealExample'
// import ReactSpringExample from '../sections/examples/ReactSpringExample'

// import EventsByUpcomingAndPastExample from '../sections/examples/EventsByUpcomingAndPastExample'

// import ParallaxExample from '../sections/examples/wip/ParallaxExample'
// import ReactSpringExample from '../sections/examples/wip/ReactSpringExample'

// import FilterExample from '../sections/examples/FilterExample'
// import LimitExample from '../sections/examples/LimitExample'
// import FilterAndLimitExample from '../sections/examples/FilterAndLimitExample'

// import FadingCarouselExample from '../sections/examples/FadingCarouselExample'
// import FlickityExample from '../sections/examples/FlickityExample'
// import SlickExample from '../sections/examples/SlickExample'

// import GalleryAndLightboxExample from '../sections/examples/GalleryAndLightboxExample'
// import ImageLightboxExample from '../sections/examples/ImageLightboxExample'
// import VideoLightboxExample from '../sections/examples/VideoLightboxExample'

// import BlockquotesExample from '../sections/examples/BlockquotesExample'
// import SVGsAndEmojisExample from '../sections/examples/SVGsAndEmojisExample'

// import TwitterExample from '../sections/examples/TwitterExample'
// import InstagramExample from '../sections/examples/InstagramExample'

// import FormikExample from '../sections/examples/FormikExample'
// import FormExample from '../sections/examples/FormExample'

// import ScrollTo from '../components/examples/ScrollTo'

export default IndexPage
