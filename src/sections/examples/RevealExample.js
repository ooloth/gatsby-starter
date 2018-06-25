const RevealExample = ({ data }) => (
  <section className="pb5">
    <h2 className="mb4">These use Reveal to appear magically on scroll</h2>

    <h3 className="mb3">Single item:</h3>
    <RevealedImage image={data[0].node} />

    <h3 className="mt4 mb3">Array of items:</h3>
    <RevealedImages images={data} />
  </section>
)

/*
 *
 * Revealed Image
 * 
 */

const RevealedImage = ({ image }) => (
  <Reveal
    css={{ opacity: 0, transform: `translateY(40px) scale(.8)` }}
    reset={true}
    offsetTop="125%"
    offsetBottom="125%"
  >
    <Img
      fluid={image.image.childImageSharp.fluid}
      alt={image.alt}
      className="shadow-lg"
    />
  </Reveal>
)

/*
 *
 * Revealed Images
 * 
 */

const RevealedImages = ({ images }) => (
  <Reveal
    css={{ opacity: 0, transform: `translateY(40px) scale(.8)` }}
    stagger={true}
    staggerDelay={0.3}
    reset={true}
    offsetTop="125%"
    offsetBottom="125%"
    tag="ul"
    style={{
      display: `grid`,
      gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
      gridGap: `1rem`
    }}
  >
    {images.map((image, index) => {
      return (
        <li key={index}>
          <Img
            fluid={image.node.image.childImageSharp.fluid}
            alt={image.node.alt}
            className="shadow-lg"
          />
        </li>
      )
    })}
  </Reveal>
)

/* <Img
            
            example={example.node}
            index={index}
          />
        )
      })}
    </ul>
  <Reveal
    css={{ opacity: 0, transform: `translateY(40px) scale(.8)` }}
    delay={index * 0.3 + 0.1}
    reset={true}
    offsetTop="100%"
    offsetBottom="100%"
  >
    <Img
      fluid={example.image.childImageSharp.fluid}
      alt={example.alt}
      className="shadow-lg"
    />
*/

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'

import Img from '../../components/Img'
import Reveal from '../../components/examples/Reveal'

export default RevealExample
