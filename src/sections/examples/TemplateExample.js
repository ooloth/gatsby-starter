const TemplateExample = ({ data }) => (
  <section className="container mv6 bg-light-yellow pv5">
    <h2 className="mb2">Here are some auto-generated template pages</h2>
    <h4 className="mb4">(These are created programmatically in gatsby-node.)</h4>

    <ul className="flex justify-between">
      {data.map((page, index) => {
        return (
          <Link key={`page-${index}`} to={`/${page.node.slug}/`} className="link dib mh3 ">
            Go to {page.node.title}
          </Link>
        )
      })}
    </ul>
  </section>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import Link from 'gatsby-link'

export default TemplateExample
