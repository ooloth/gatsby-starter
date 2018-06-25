const Base = ({ children }) => (
  <StaticQuery
    query={graphql`
      query BaseQuery {
        site {
          siteMetadata {
            description
            language
            locale
            title
            twitterHandle
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <SiteMetadata site={data.site.siteMetadata} />
        <Header />
        {children}
        <Footer />
        <BasicStructuredData />
      </Fragment>
    )}
  />
)

/*
 *
 * Global styles
 * 
 */

// Use PostCSS stylesheet in development and PostCSS/PurgeCSS stylesheet in production:
switch (process.env.NODE_ENV) {
case `development`:
  require(`../styles/builds/after-postcss/output.css`)
  break
case `production`:
  require(`../styles/builds/after-purgecss/output.css`)
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

import siteImage from '../img/placeholder.jpg'

const SiteMetadata = ({ site }) => (
  <Helmet>
    {/* HTML language */}
    <html itemScope itemType="http://schema.org/WebPage" lang={site.language} />

    {/* Title comes first (meta charset and viewport are automatically included) */}
    <title itemProp="name" lang={site.language}>
      {site.title}
    </title>

    {/* Search engine */}
    <meta name="description" content={site.description} />
    <meta name="image" content={site.siteUrl + siteImage} />
    <link rel="canonical" href={site.siteUrl} />

    {/* Schema.org for Google */}
    <meta itemProp="name" content={site.title} />
    <meta itemProp="description" content={site.description} />
    <meta itemProp="image" content={site.siteUrl + siteImage} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={site.title} />
    <meta name="twitter:description" content={site.description} />
    <meta name="twitter:image:src" content={site.siteUrl + siteImage} />

    {/* Open Graph general (Facebook, Pinterest, Slack & Google+) */}
    <meta property="og:title" content={site.title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={site.siteUrl} />
    <meta property="og:image" content={site.siteUrl + siteImage} />
    <meta property="og:description" content={site.description} />
    <meta property="og:site_name" content={site.title} />
    <meta property="og:locale" content={site.locale} />

    {/* Non-essential, but required for analytics */}
    {site.facebookAppId && (
      <meta property="fb:app_id" content={site.facebookAppId} />
    )}
    {site.twitterHandle && <meta name="twitter:site" content={site.twitterHandle} />}
  </Helmet>
)

/*
 *
 * Basic Structured Data
 * 
 */

const BasicStructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: structuredData }}
  />
)

const structuredData = `{
  "@context": "http://schema.org",
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colorado Springs",
    addressRegion: "CO",
    postalCode: "80840",
    streetAddress: "100 Main Street"
  },
  email: "mailto:info@example.com",
  image: "janedoe.jpg",
  jobTitle: "Research Assistant",
  name: "Jane Doe",
  alumniOf: "Dartmouth",
  birthPlace: "Philadelphia, PA",
  birthDate: "1979.10.12",
  height: "72 inches",
  memberOf: "Republican Party",
  telephone: "(123) 456-6789",
  url: "http://www.example.com",
  sameAs: [
    "https://www.facebook.com/name",
    "https://www.linkedin.com/name",
    "http://twitter.com/name",
    "http://instagram.com/name"
  ]
}`

/*
 *
 * Imports & Exports
 * 
 */

import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from '../sections/Header'
import Footer from '../sections/Footer'

export default Base
