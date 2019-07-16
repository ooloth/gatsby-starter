// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

function useSecondPageMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            secondPage {
              title
              description
              url
            }
          }
        }
      }
    `
  )

  return site.siteMetadata.secondPage
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useSecondPageMetadata

/*

import useSecondPageMetadata from '../data/useSecondPageMetadata'

const secondPageMetadata = useSecondPageMetadata()
const { title, description, url } = useSecondPageMetadata()

*/
