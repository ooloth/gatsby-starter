// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// Note: use this instead of useEvents.js if I'm manually marking events as upcoming or past and I want to avoid filtering them in the client

// TODO: if not using, consider deleting data/events.yml as well

function usePastEventsData() {
  const { allEventsYaml } = useStaticQuery(
    graphql`
      query {
        allEventsYaml(filter: { upcoming: { ne: true } }) {
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

export default usePastEventsData

/*

import usePastEventsData from '../data/usePastEventsData'

const pastEvents = usePastEventsData()

*/
