// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// TODO: if not using, delete data/linksNav.yml as well

function useNavLinksData() {
  const { allLinksNavYaml } = useStaticQuery(
    graphql`
      query {
        allLinksNavYaml {
          nodes {
            href
            text
          }
        }
      }
    `
  )

  return allLinksNavYaml.nodes
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useNavLinksData

/*

import useNavLinksData from '../data/useNavLinksData'

const navLinks = useNavLinksData()

*/
