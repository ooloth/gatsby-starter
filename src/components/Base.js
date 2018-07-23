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
        <BasicStructuredData site={data.site.siteMetadata} />
      </Fragment>
    )}
  />
)

/*
 *
 * Global styles
 * 
 */

import '../styles/index.css'

/*
 *
 * Metadata
 * 
 */

// See: https://github.com/nfl/react-helmet + https://megatags.co + https://gethead.info

import siteImage from '../img/placeholder-1.jpg'

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

    {/* Preconnect to CloudFlare CDN (for GSAP) */}
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

    {/* Google fonts */}
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:400,700&amp;subset=latin-ext"
      rel="stylesheet"
    />

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

const BasicStructuredData = ({ site }) => {
  const structuredData = `{
    "@context": "http://schema.org",
    "@type": "Person",
    "email": "mailto:email@website.com",
    "image": "${site.siteUrl + siteImage.replace(`js/../`, ``)}",
    "jobTitle": "What they do",
    "name": "Their name",
    "url": "${site.siteUrl}",
    "sameAs": [
      "https://www.facebook.com/clientname",
      "https://twitter.com/clientname",
      "https://www.youtube.com/channel/clientchannel"
    ]
  }`

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: structuredData }}
    />
  )
}

/*
 *
 * Monitor unnecessary rerenders...
 *
 */

// TODO: Use this? Too many false-positives because of Reveal/Mount animations?

// if (process.env.NODE_ENV !== `production`) {
//   const { whyDidYouUpdate } = require(`why-did-you-update`)
//   whyDidYouUpdate(React)
// }

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
