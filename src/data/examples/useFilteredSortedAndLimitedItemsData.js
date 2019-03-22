// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

// Use this approach if I want to filter AND limit (faster than doing this later in JS)

// TODO: if not using, consider deleting data/items.yml as well

function useFilteredSortedAndLimitedItemsData() {
  const { allItemsYaml } = useStaticQuery(
    graphql`
      query {
        allItemsYaml(
          filter: { category: { eq: "featured" } }
          sort: { fields: [date], order: DESC }
          limit: 10
        ) {
          edges {
            node {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    `
  )

  return allItemsYaml.edges
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useFilteredSortedAndLimitedItemsData

/*

import useFilteredSortedAndLimitedItemsData from '../data/useFilteredSortedAndLimitedItemsData'

const filteredSortedAndLimitedItems = useFilteredSortedAndLimitedItemsData()

*/
