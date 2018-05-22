/*
 *
 * This template is used to lay out the INSERT PAGE CATEGORY 
 * pages that are generated programatically by gatsby-node
 * using the data entered in INSERT-FILE.yaml.
 * 
 */

const Template = ({ data }) => {
  const template = data.allTemplateYaml.edges[0].node

  return (
    <main id="main-content tc">
      <PageMetadata page={template.pageMetadata} />

      <h1 className="pv4 tc f1">Hi from {template.title}</h1>

      <div className="tc">
        <Link to="/" className="link dib mb4">
          Go back home
        </Link>
      </div>
    </main>
  )
}

/*
 *
 * Queries
 * 
 */

export const query = graphql`
  query ProductionPageQuery($slug: String!) {
    allTemplateYaml(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
          pageMetadata {
            title
            description
            url
          }
        }
      }
    }
  }
`

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import Link from 'gatsby-link'

import PageMetadata from '../components/PageMetadata'

export default Template
