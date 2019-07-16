// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// TODO: if not using, delete data/videos.yml as well

function useVideosData() {
  const { allVideosYaml } = useStaticQuery(
    graphql`
      query {
        allVideosYaml {
          nodes {
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
    `
  )

  return allVideosYaml.nodes
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useVideosData

/*

import useVideosData from '../data/useVideosData'

const videos = useVideosData()

*/
