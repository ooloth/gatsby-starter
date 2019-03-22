// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// TODO: if not using, delete data/mediaOnstage.yml as well

function useMediaOnstageData() {
  const { allMediaOnstageYaml } = useStaticQuery(
    graphql`
      query {
        allMediaOnstageYaml {
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

  return allMediaOnstageYaml.edges
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useMediaOnstageData

/*

import useMediaOnstageData from '../data/useMediaOnstageData'

const mediaOnstage = useMediaOnstageData()

*/
