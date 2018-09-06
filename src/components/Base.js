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
    `}
    render={data => (
      <>
        <SiteMetadata site={data.site.siteMetadata} />
        <Header
          navLinks={data.allLinksNavYaml.edges}
          socialLinks={data.allLinksSocialYaml.edges}
        />
        {children}
        <Footer socialLinks={data.allLinksSocialYaml.edges} />
        <BasicStructuredData site={data.site.siteMetadata} />
      </>
    )}
  />
)

/*
 *
 * Global styles & preloaded static assets (e.g. above-the-fold images, audio, video, and self-hosted fonts not handled by subfont)
 * 
 */

import '../styles/index.css'

// TODO: remove these if not using
// TODO: always test performance difference with/without these (e.g. compare live version to local built version)
// import avenirRegular from '../fonts/AvenirNextLTPro-Regular.woff2'
// import avenirHeavy from '../fonts/AvenirNextLTPro-Heavy.woff2'

/*
 *
 * Metadata
 * 
 */

// See: https://github.com/nfl/react-helmet + https://megatags.co + https://gethead.info

import siteImage from '../images/placeholder-1.jpg'

// Trigger polyfills for react-pose (IE)
Array.from('123')
String.endsWith('abc')

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

    {/* Preconnect to CloudFlare CDN (for GSAP) and Google Analytics */}
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
    {/* TODO: uncomment these if ga-lit is used: */}
    {/* <link rel="preconnect" href="https://cdn.jsdelivr.net" />
    <link rel="preconnect" href="https://www.google-analytics.com" /> */}

    {/* Preloaded above-the-fold static assets (fonts, images, audio, video) */}
    {/* See the following link to determine the correct crossOrigin for each asset type: https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content#Cross-origin_fetches#Cross-origin_fetches */}
    {/* <link
      rel="preload"
      href={avenirHeavy}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href={avenirRegular}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    /> */}

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

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from '../sections/Header'
import Footer from '../sections/Footer'

export default Base
