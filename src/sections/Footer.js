const Footer = () => (
  <footer class="bg-black pa3 tc white">
    <h1>I'm a footer</h1>
    {/* <BasicStructuredData /> */}
  </footer>
)

export default Footer

/*
 *
 * Imports
 * 
 */

import React from 'react'

/*
 *
 * Basic Structured Data
 * 
 */

const BasicStructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: structuredData }}
    async
    defer
  />
)

const structuredData = `{
  '@context': 'http://schema.org',
  '@type': 'Person',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Colorado Springs',
    addressRegion: 'CO',
    postalCode: '80840',
    streetAddress: '100 Main Street'
  },
  email: 'mailto:info@example.com',
  image: 'janedoe.jpg',
  jobTitle: 'Research Assistant',
  name: 'Jane Doe',
  alumniOf: 'Dartmouth',
  birthPlace: 'Philadelphia, PA',
  birthDate: '1979.10.12',
  height: '72 inches',
  memberOf: 'Republican Party',
  telephone: '(123) 456-6789',
  url: 'http://www.example.com',
  sameAs: [
    'https://www.facebook.com/name',
    'https://www.linkedin.com/name',
    'http://twitter.com/name',
    'http://instagram.com/name'
  ]
}`
