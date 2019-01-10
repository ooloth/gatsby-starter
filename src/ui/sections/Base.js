function Base({ children }) {
  const [isIE, setIsIE] = useState(false)

  useEffect(() => setIsIE(is.ie()), [])

  return (
    <StaticQuery
      query={BASE_QUERY}
      render={data => (
        <>
          <Metadata
          // preload={[
          //   { href: avenirRegular, as: `font`, type: `font/woff2` },
          //   { href: avenirHeavy, as: `font`, type: `font/woff2` }
          // ]}
          // preconnect={[
          //   `https://cdnjs.cloudflare.com`,
          //   `https://cdn.jsdelivr.net`,
          //   `https://www.google-analytics.com`
          // ]}
          />

          <CustomProperties />
          <Reset />
          {/* <FontFace /> */}

          {isIE ? (
            <BrowserWarning title={data.site.siteMetadata.title} />
          ) : (
            <>
              <Top
                navLinks={data.allLinksNavYaml.edges}
                socialLinks={data.allLinksSocialYaml.edges}
              />

              {children}

              <Bottom
                navLinks={data.allLinksNavYaml.edges}
                socialLinks={data.allLinksSocialYaml.edges}
              />
            </>
          )}
        </>
      )}
    />
  )
}

///////////////////////////////////////////////////////////////////////////////////

//  TODO: query email and social links from gatsby-config instead (and delete YML duplicates)?
const BASE_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allLinksNavYaml {
      edges {
        node {
          href
          text
        }
      }
    }
    allLinksSocialYaml {
      edges {
        node {
          href
          text
        }
      }
    }
  }
`

///////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import is from 'is_js'

import { Metadata } from '../elements'
import BrowserWarning from './BrowserWarning'
import Top from './Top'
import Bottom from './Bottom'

import { CustomProperties, Reset } from '../../styles'
// import FontFace from '../styles/FontFace'

// import avenirRegular from '../fonts/AvenirNextLTPro-Regular.woff2'
// import avenirHeavy from '../fonts/AvenirNextLTPro-Heavy.woff2'

export default Base
