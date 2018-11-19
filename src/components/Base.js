// TODO: See Peter's Base.js for how to replace site with browser warning (last resort if issues can't be resolved)

function Base({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query {
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
          allLinksYaml {
            edges {
              node {
                nav {
                  href
                  text
                }
                social {
                  href
                  text
                }
              }
            }
          }
        }
      `}
      render={data => (
        // TODO: engage Suspense if needed (doesn't work with gatsby build at the moment, but should work on Netlify)
        // <Suspense fallback={<div />}>
        <>
          <SiteMetadata site={data.site.siteMetadata} />

          <Header links={data.allLinksYaml.edges} />

          {children}

          <Footer links={data.allLinksYaml.edges} />

          <StructuredData site={data.site.siteMetadata} />
        </>
        // </Suspense>
      )}
    />
  )
}

/*
 *
 * Global styles & preloaded static assets (e.g. above-the-fold images, audio, video, and self-hosted fonts not handled by subfont)
 *
 */

import '../styles/index.css'

// TODO: remove these preloaded critical asset imports if not using
// TODO: always test performance difference with/without these (e.g. compare live version to local built version)
// NOTE: do NOT preload images since there is no way to know which generated image copy should be preloaded. Only preload static/unmanipulated assets that are also critical (e.g. self-hosted fonts).
// import avenirRegular from '../fonts/AvenirNextLTPro-Regular.woff2'
// import avenirHeavy from '../fonts/AvenirNextLTPro-Heavy.woff2'

/*
 *
 * Metadata
 *
 */

// See: https://github.com/nfl/react-helmet + https://megatags.co + https://gethead.info

import siteImage from '../images/placeholder-1.jpg'

// TODO: Need to trigger polyfills for react-pose (IE)?
// var a = Array.from('123')
// var b = String.prototype.endsWith('abc')

function SiteMetadata({ site }) {
  return (
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

      {/* Preloaded above-the-fold static assets (fonts, audio, video) */}
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
      {/* <link
      href="https://fonts.googleapis.com/css?family=Raleway:400,700&amp;subset=latin-ext"
      rel="stylesheet"
    /> */}

      {/* Schema.org for Google */}
      <meta itemProp="name" content={site.title} />
      <meta itemProp="description" content={site.description} />
      <meta itemProp="image" content={site.siteUrl + siteImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={site.title} />
      <meta name="twitter:description" content={site.description} />
      <meta name="twitter:image" content={site.siteUrl + siteImage} />

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
      {site.twitterHandle && (
        <meta name="twitter:site" content={site.twitterHandle} />
      )}
    </Helmet>
  )
}

/*
 *
 * Structured Data
 *
 */

function StructuredData({ site }) {
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

  // TODO: use this shape instead for a business listing:
  // const structuredData = `{
  //   "@context": "http://schema.org",
  //   "@type": "LocalBusiness",
  //   "@id": "${site.siteUrl}",
  //   "name": "Company Name",
  //   "address": {
  //     "@type": "PostalAddress",
  //     "streetAddress": "305 Healey Rd., Unit A",
  //     "addressLocality": "Bolton",
  //     "addressRegion": "ON",
  //     "postalCode": "L7E 5C1",
  //     "addressCountry": "CA"
  //   },
  //   "url": "${site.siteUrl}",
  //   "email": "mailto:name@company.com",
  //   "telephone": "+18448575464",
  //   "image": "${site.siteUrl + siteImage.replace(`js/../`, ``)}",
  //   "sameAs": [
  //     "https://www.facebook.com/user",
  //     "https://twitter.com/user",
  //     "https://www.instagram.com/user",
  //     "https://www.youtube.com/channel/user",
  //     "https://www.linkedin.com/company/user"
  //   ]
  // }`

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: structuredData }}
    />
  )
}

/*
 *
 * Imports & Exports
 *
 */

import React, { Suspense } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
// FIXME: can't use this if also using Spring (see error in RevealExample)
// import { setConfig } from 'react-hot-loader' // TODO: remove when HMR useState bug fixed
// setConfig({ pureSFC: true }) // TODO: remove when useState is fixed in development

import Header from '../sections/Header'
import Footer from '../sections/Footer'

export default Base
