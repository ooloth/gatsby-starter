const ReactSpringExample = () => (
  <section className="mv6">
    <h2>React Spring Examples</h2>

    <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={1}>
        <div className="bg-red pa3 h7">Layer 1</div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <div className="bg-blue pa3">Layer 2</div>
      </ParallaxLayer>
    </Parallax>
  </section>
)

/* 
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring'

export default ReactSpringExample
