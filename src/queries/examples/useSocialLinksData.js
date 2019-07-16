// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// TODO: if not using, delete data/linksSocial.yml as well

function useSocialLinksData() {
  const { allLinksSocialYaml } = useStaticQuery(
    graphql`
      query {
        allLinksSocialYaml {
          nodes {
            href
            text
          }
        }
      }
    `
  )

  return allLinksSocialYaml.nodes
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useSocialLinksData

/*

import useSocialLinksData from '../data/useSocialLinksData'

const socialLinks = useSocialLinksData()

*/
