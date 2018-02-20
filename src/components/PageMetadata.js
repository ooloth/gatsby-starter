const PageMetadata = ({ page }) => (
  <Helmet>
    {/* Page title */}
    <title itemProp="name">{page.title}</title>

    {/* Search engine */}
    <meta name="description" content={page.description} />
    <link rel="canonical" href={page.url} />

    {/* Schema.org for Google */}
    <meta itemprop="name" content={page.title} />
    <meta itemprop="description" content={page.description} />

    {/* Twitter */}
    <meta name="twitter:title" content={page.title} />
    <meta name="twitter:description" content={page.description} />

    {/* Open Graph general (Facebook, Pinterest & Google+) */}
    <meta property="og:title" content={page.title} />
    <meta property="og:description" content={page.description} />
  </Helmet>
)

export default PageMetadata

/*
 *
 * Imports
 * 
 */

import React from 'react'
import Helmet from 'react-helmet'
