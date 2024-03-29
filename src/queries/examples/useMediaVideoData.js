// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// TODO: if not using, delete data/mediaVideo.yml as well

function useMediaVideoData() {
  const { allMediaVideoYaml } = useStaticQuery(
    graphql`
      query {
        allMediaVideoYaml {
          nodes {
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
    `
  )

  return allMediaVideoYaml.nodes
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useMediaVideoData

/*

import useMediaVideoData from '../data/useMediaVideoData'

const mediaVideo = useMediaVideoData()

*/
