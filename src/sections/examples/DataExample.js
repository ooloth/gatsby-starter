const DataExample = ({ data }) => (
  <section className="mv6">
    <h2 className="mb3">Here's some queried JSON content:</h2>
    <ul className="flex justify-between">
      {data.map((example, index) => {
        return <Example key={`example-${index}`} example={example.node} />
      })}
    </ul>
  </section>
)

/* 
 *
 * Example
 * 
 */

const Example = ({ example }) => (
  <li className="mb5 ph3 w-third">
    <Img
      sizes={example.image.childImageSharp.sizes}
      position="0% 0%"
      alt={example.alt}
      critical={example.critical}
      className="shadow-lg"
    />
    <h3 className="mb3 pt3 f3">{example.title}</h3>
    <p
      className="ml-auto mr-auto mb3 measure lh-tall"
      dangerouslySetInnerHTML={{ __html: example.description }}
    />
    <HyperLink href={example.link} className="link dib">
      I'm a link
    </HyperLink>
  </li>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'

import Img from '../../components/Img'
import HyperLink from '../../components/HyperLink'

export default DataExample
