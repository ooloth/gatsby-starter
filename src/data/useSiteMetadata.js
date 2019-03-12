// See: https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/

function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            jobTitle
            description
            siteUrl
            lang
            locale
            email
            telephone
            twitterSite
            twitterCreator
            socialLinks
            address {
              street
              locality
              region
              country
            }
            structuredDataType
          }
        }
      }
    `
  )

  return site.siteMetadata
}

///////////////////////////////////////////////////////////////////////////////////

import { useStaticQuery, graphql } from 'gatsby'

export default useSiteMetadata

/*

import useSiteMetadata from '../data/useSiteMetadata'

const { title } = useSiteMetadata()

*/
