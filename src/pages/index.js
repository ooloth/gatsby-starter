function IndexPage({ data }) {
  return (
    <Base>
      <main id="main-content">
        {/* <AccordionExample />
        <DialogExample />
        <FilterAndLimitExample />
        <LimitExample />
        <MailChimpExample />
        <PopUpExample />
        <ReadMoreExample />
        <RevealOnScrollExample />
        <ScrollToIdExample />
        <TwitterFeedExample />
        <VideoiFrameExample />
        <VideoThumbnailAndDialogExample video={data.allVideosYaml.edges[0].node} /> */}

        {/* 
        <TemplateExample data={data.allTemplateYaml.edges} />
        <RevealExample data={data.allExampleYaml.edges} />

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

        <SVGsAndEmojisExample />
        <TwitterExample />
        <InstagramExample /> */}

        {/* TODO: activate ONLY if site has a form (so Netlify doesn't register it unnecessarily) */}
        {/* <p className="pb5">(The Form example is hidden by default.)</p> */}
        {/* <FormikExample /> */}
        {/* <FormExample /> */}
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

    allTemplateYaml {
      edges {
        node {
          title
          slug
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

    # TODO: If manually marking events as upcoming/past:
    # upcomingEvents: allEventsYaml(filter: { upcoming: { eq: true } }) {
    #  edges {
    #    node {
    #      title
    #    }
    #  }
    #}

    # TODO: If I want to filter AND limit (fast than doing this later in JS):
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
// import AccordionExample from '../ui/@ex-sections/AccordionExample'
// import DialogExample from '../ui/@ex-sections/DialogExample'
// import FilterAndLimitExample from '../ui/@ex-sections/FilterAndLimitExample'
// import LimitExample from '../ui/@ex-sections/LimitExample'
// import MailChimpExample from '../ui/@ex-sections/MailChimpExample'
// import PopUpExample from '../ui/@ex-sections/PopUpExample'
// import ReadMoreExample from '../ui/@ex-sections/ReadMoreExample'
// import RevealOnScrollExample from '../ui/@ex-sections/RevealOnScrollExample'
// import ScrollToIdExample from '../ui/@ex-sections/ScrollToIdExample'
// import TwitterFeedExample from '../ui/@ex-sections/TwitterFeedExample'
// import VideoiFrameExample from '../ui/@ex-sections/VideoiFrameExample'
// import VideoThumbnailAndDialogExample from '../ui/@ex-sections/VideoThumbnailAndDialogExample'

// import TemplateExample from '../sections/examples/TemplateExample'

// import RevealExample from '../sections/examples/RevealExample'

// import EventsByUpcomingAndPastExample from '../sections/examples/EventsByUpcomingAndPastExample'

// import FadingCarouselExample from '../sections/examples/FadingCarouselExample'
// import FlickityExample from '../sections/examples/FlickityExample'
// import SlickExample from '../sections/examples/SlickExample'

// import GalleryAndLightboxExample from '../sections/examples/GalleryAndLightboxExample'
// import ImageLightboxExample from '../sections/examples/ImageLightboxExample'
// import VideoLightboxExample from '../sections/examples/VideoLightboxExample'

// import SVGsAndEmojisExample from '../sections/examples/SVGsAndEmojisExample'

// import TwitterExample from '../sections/examples/TwitterExample'
// import InstagramExample from '../sections/examples/InstagramExample'

// import FormikExample from '../sections/examples/FormikExample'
// import FormExample from '../sections/examples/FormExample'

export default IndexPage
