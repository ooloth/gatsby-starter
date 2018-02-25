const TemplateWrapper = ({ children, data }) => {
  const site = data.site.siteMetadata

  return (
    <div>
      <SiteMetadata site={data.site.siteMetadata} />
      <Header />
      {children()}
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

/*
 *
 * Imports
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

/*
 *
 * Global styles
 * 
 */

// Use PostCSS stylesheet in development and PostCSS/PurgeCSS stylesheet in production:
switch (process.env.NODE_ENV) {
  case `development`:
    require('../styles/builds/after-postcss/output.css')
    break
  case `production`:
    require('../styles/builds/after-purgecss/output.css')
    break
}

// Import open-source fonts from Typefaces (@font-face automatically injected)
// import 'typeface-raleway'

/*
 *
 * Metadata
 * 
 */

// See: https://github.com/nfl/react-helmet + https://megatags.co + https://gethead.info

import siteImage from '../images/placeholder.jpg'

const SiteMetadata = ({ site }) => (
  <Helmet>
    {/* HTML language */}
    <html lang={site.language} />

    {/* Title comes first (meta charset and viewport are automatically included) */}
    <title itemProp="name" lang={site.language}>
      {site.title}
    </title>

    {/* Search engine */}
    <meta name="description" content={site.description} />
    <meta name="image" content={siteImage} />
    <link rel="canonical" href={site.url} />

    {/* Schema.org for Google */}
    <meta itemprop="name" content={site.title} />
    <meta itemprop="description" content={site.description} />
    <meta itemprop="image" content={siteImage} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={site.title} />
    <meta name="twitter:description" content={site.description} />
    {site.twitterHandle && <meta name="twitter:site" content={site.twitterHandle} />}
    <meta name="twitter:image:src" content={siteImage} />

    {/* Open Graph general (Facebook, Pinterest & Google+) */}
    <meta property="og:title" content={site.title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={site.url} />
    <meta property="og:image" content={siteImage} />
    <meta property="og:description" content={site.description} />
    <meta property="og:site_name" content={site.name} />
    <meta property="og:locale" content={site.locale} />
  </Helmet>
)

/*
 *
 * Queries
 * 
 */

export const query = graphql`
  query BaseQuery {
    site {
      siteMetadata {
        description
        language
        locale
        title
        twitterHandle
        url
      }
    }
  }
`
