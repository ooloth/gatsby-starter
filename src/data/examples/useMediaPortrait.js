// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// TODO: if not using, delete data/mediaPortrait.yml as well

function useMediaPortrait() {
  const { allMediaPortraitYaml } = useStaticQuery(
    graphql`
      query {
        allMediaPortraitYaml {
          edges {
            node {
              image {
                childImageSharp {
                  thumbnail: fluid(maxWidth: 800) {
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
      }
    `
  )

  return allMediaPortraitYaml.edges
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useMediaPortrait

/*

import useMediaPortrait from '../data/useMediaPortrait'

const mediaPortrait = useMediaPortrait()

*/
