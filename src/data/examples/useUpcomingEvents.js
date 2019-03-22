// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// Note: use this instead of useEvents.js if I'm manually marking events as upcoming or past and I want to avoid filtering them in the client

// TODO: if not using, consider deleting data/events.yml as well

function useUpcomingEvents() {
  const { allEventsYaml } = useStaticQuery(
    graphql`
      query {
        allEventsYaml(filter: { upcoming: { eq: true } }) {
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

export default useUpcomingEvents

/*

import useUpcomingEvents from '../data/useUpcomingEvents'

const upcomingEvents = useUpcomingEvents()

*/
