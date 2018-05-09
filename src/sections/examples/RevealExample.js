const RevealExample = ({ data }) => (
  <section className="pb5">
    <h2 className="mb3">These use Reveal to appear magically on scroll</h2>
    <div
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
        gridGap: `1rem`
      }}
    >
      {data.map((example, index) => {
        return (
          <RevealedImage
            key={`reveal-example-${index}`}
            example={example.node}
            index={index}
          />
        )
      })}
    </div>
  </section>
)

/*
 *
 * Revealed Image
 * 
 */

const RevealedImage = ({ example, index }) => (
  <Reveal
    css={{ opacity: 0, transform: `translateY(40px) scale(.8)` }}
    delay={index * 0.3 + 0.1}
    duration={1}
    offsetTop={-100}
  >
    <Img
      sizes={example.image.childImageSharp.sizes}
      alt={example.alt}
      critical={true}
      className="shadow-lg"
    />
  </Reveal>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'

import Img from '../../components/Img'
import Reveal from '../../components/examples/Reveal'

export default RevealExample
