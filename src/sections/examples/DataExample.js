const DataExample = ({ data }) => (
  <section>
    <h2 className="mb3 f3">Here's some queried JSON content:</h2>
    <ul>
      {data.map(example => {
        return <Example key={shortid.generate()} example={example.node} />
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
  <li className="mb5 ph3">
    <Img
      sizes={example.image.childImageSharp.sizes}
      position="0% 0%"
      alt={example.alt}
      critical={example.critical}
      className="shadow-lg"
    />
    <h3 className="mb3 pt3 f2">{example.title}</h3>
    <p
      className="ml-auto mr-auto pv3 measure lh-tall"
      dangerouslySetInnerHTML={{ __html: example.description }}
    />
    <HyperLink href={example.link} className="link dib">
      Here's a link
    </HyperLink>
  </li>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import shortid from 'shortid'

import Img from '../../components/Img'
import HyperLink from '../../components/HyperLink'

export default DataExample
