// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// TODO: if not using, delete data/templates.yml as well

function useTemplatesData() {
  const { allTemplatesYaml } = useStaticQuery(
    graphql`
      query {
        allTemplatesYaml {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )

  return allTemplatesYaml.edges
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useTemplatesData

/*

import useTemplatesData from '../data/useTemplatesData'

const templates = useTemplatesData()

*/
