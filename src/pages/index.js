function IndexPage({ data }) {
  return (
    <Base>
      {/* <Main
        rows={{
          title: <Heading size="large">Gatsby Starter</Heading>,
          link: <Link to="/page-2/">Go to page 2</Link>,
          grid: <StyledCompExample />,
          airtable: <AirtableExample />
        }}
      /> */}

      <Main id="main-content" tabIndex="-1">
        <Header ga="😄">
          <Heading size="large">Gatsby Starter</Heading>
          <Link to="/page-2/">Go to page 2</Link>
        </Header>

        <StyledCompExample ga="🤓" />
        <AirtableExample ga="💨" />

        {/* <YamlExample data={data.allExampleYaml.edges} />
        <TemplateExample data={data.allTemplateYaml.edges} />

        <MountTransitionExample />
        <GSAPExample />
        <RevealExample data={data.allExampleYaml.edges} />
        <ReactSpringExample />

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
      </Main>
    </Base>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Main = styled.main`
  display: grid;
  grid-template-rows:
    var(--s4)
    [😄] auto
    var(--s6)
    [🤓] auto
    var(--s6)
    [💨] auto
    var(--s6);
`

// const Main = styled(Layout)`
//   grid-template-rows:
//     0.5rem
//     [title] auto
//     0.5rem
//     [link] auto
//     2rem
//     [grid] auto
//     4rem
//     [airtable] auto
//     4rem;
// `

///////////////////////////////////////////////////////////////////////////////////

/*
 *
 * Queries
 *
 */

export const query = graphql`
  query {
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

/*
 *
 * Imports & Exports
 *
 */

import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
// import Layout from 'layup/styled'

import Base from '../ui/Base'
import StyledCompExample from '../ui/examples/StyledCompExample'
import AirtableExample from '../ui/examples/AirtableExample'
import { Header, Heading } from '../ui/elements'

// TailwindCSS Styles:

// import YamlExample from '../sections/examples/YamlExample'
// import TemplateExample from '../sections/examples/TemplateExample'

// import MountTransitionExample from '../sections/examples/MountTransitionExample'
// import GSAPExample from '../sections/examples/GSAPExample'
// import RevealExample from '../sections/examples/RevealExample'
// import ReactSpringExample from '../sections/examples/ReactSpringExample'

// import CollapseExample from '../sections/examples/CollapseExample'
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
