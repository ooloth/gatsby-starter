// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

function useSocialLinks() {
  const { allLinksSocialYaml } = useStaticQuery(
    graphql`
      query {
        allLinksSocialYaml {
          edges {
            node {
              href
              text
            }
          }
        }
      }
    `
  )

  return allLinksSocialYaml.edges
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useSocialLinks

/*

import useSocialLinks from '../data/useSocialLinks'

const socialLinks = useSocialLinks()

*/
