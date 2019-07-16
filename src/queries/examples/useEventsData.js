// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// TODO: if not using, consider deleting data/events.yml as well

function useEventsData() {
  const { allEventsYaml } = useStaticQuery(
    graphql`
      query {
        allEventsYaml(sort: { fields: [lastDate], order: DESC }) {
          nodes {
            title {
              text
              lang
            }
            lastDate(formatString: "MMMM DD, YYYY")
          }
        }
      }
    `
  )

  return allEventsYaml.nodes
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useEventsData

/*

import useEventsData from '../data/useEventsData'

const events = useEventsData()

*/
