// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// TODO: if not using, consider deleting data/events.yml as well

function useEvents() {
  const { allEventsYaml } = useStaticQuery(
    graphql`
      query {
        allEventsYaml(sort: { fields: [lastDate], order: DESC }) {
          edges {
            node {
              title {
                text
                lang
              }
              lastDate(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    `
  )

  return allEventsYaml.edges
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useEvents

/*

import useEvents from '../data/useEvents'

const events = useEvents()

*/
