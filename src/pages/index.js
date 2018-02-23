import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <main className="container tc">
    <h1 className="pv4 f1">Hi people</h1>
    <Link to="/page-2/" className="link dib mb4">
      Go to page 2
    </Link>
    <h2 className="mb3 f3">Here's some queried JSON content:</h2>
    {data.allExampleJson.edges.map(example => {
      return <Example key={shortid()} example={example.node} />
    })}
  </main>
)

export default IndexPage

/*
 *
 * General
 * 
 */

import React from 'react'
import shortid from 'shortid'

/*
 *
 * Example
 * 
 */

import Image from 'gatsby-image'

import HyperLink from '../components/HyperLink'

const Example = ({ example }) => (
  <article className="mb5 ph3">
    <Image
      sizes={example.image.childImageSharp.sizes}
      alt={example.alt}
      className="shadow-lg"
    />
    <h3 className="mb3 pt3 f2">{example.title}</h3>
    <p className="ml-auto mr-auto pv3 measure lh-tall">{example.description}</p>
    <HyperLink href={example.link} className="link dib">
      Here's a link
    </HyperLink>
  </article>
)

/*
 *
 * Queries
 * 
 */

export const query = graphql`
  query IndexPageQuery {
    allExampleJson {
      edges {
        node {
          image {
            childImageSharp {
              sizes(maxWidth: 5184) {
                ...GatsbyImageSharpSizes_withWebp
              }
            }
          }
          alt
          title
          description
          link
        }
      }
    }
  }
`
