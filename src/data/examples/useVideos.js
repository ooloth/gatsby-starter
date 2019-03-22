// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// TODO: if not using, delete data/videos.yml as well

function useVideos() {
  const { allVideosYaml } = useStaticQuery(
    graphql`
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
      }
    `
  )

  return allVideosYaml.edges
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useVideos

/*

import useVideos from '../data/useVideos'

const videos = useVideos()

*/
