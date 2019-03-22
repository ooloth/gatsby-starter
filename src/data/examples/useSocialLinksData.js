// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// TODO: if not using, delete data/linksSocial.yml as well

function useSocialLinksData() {
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

export default useSocialLinksData

/*

import useSocialLinksData from '../data/useSocialLinksData'

const socialLinks = useSocialLinksData()

*/
