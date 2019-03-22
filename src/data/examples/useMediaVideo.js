// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// TODO: if not using, delete data/mediaVideo.yml as well

function useMediaVideo() {
  const { allMediaVideoYaml } = useStaticQuery(
    graphql`
      query {
        allMediaVideoYaml {
          edges {
            node {
              video
              image {
                childImageSharp {
                  thumbnail: fluid(maxWidth: 800) {
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
      }
    `
  )

  return allMediaVideoYaml.edges
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useMediaVideo

/*

import useMediaVideo from '../data/useMediaVideo'

const mediaVideo = useMediaVideo()

*/
