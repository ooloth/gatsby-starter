const ParallaxExample = () => (
  <section className="mv6">
    <h2>Parallax Example</h2>

    <div className="flex justify-between items-center bg-pink h7">
      <p>I'm normal</p>
      <Parallax
        className="bg-blue h-50 shadow-md"
        style={{ height: `110%` }}
        speed={2}
        percentage={0.5}
      >
        I’m slow and smooth
      </Parallax>
    </div>
  </section>
)

/* 
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import Parallax from 'react-rellax'
// see: https://github.com/nelonoel/react-rellax

export default ParallaxExample

// TODO: Does this make the page shake on scroll in Chrome? Is that only a problem for the localhost version (check the live version)?
