/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/*
 *
 * Polyfills (before first render)
 * 
 */

exports.onClientEntry = () => {
  // NOTE: Don't polyfill Promise here (Gatsby already includes a Promise polyfill)

  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    require(`intersection-observer`)
    console.log(`👍 IntersectionObserver is polyfilled`)
  }

  // Object-fit/Object-position polyfill for gatsby-image (IE)
  const testImg = document.createElement(`img`)
  if (
    typeof testImg.style.objectFit === `undefined` ||
    typeof testImg.style.objectPosition === `undefined`
  ) {
    require(`object-fit-images`)()
    console.log(`👍 Object-fit/Object-position are polyfilled`)
  }
}

/*
 *
 * Polyfills and global scripts (after first render)
 * 
 */

import loadjs from 'loadjs'

// A11Y: Detect keyboard vs. mouse vs. touch input (for focus styling)
exports.onInitialClientRender = () => {
  // GSAP for site-wide animations
  loadjs(`https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js`, `gsap`, () =>
    console.log(`👍 GSAP is loaded`)
  )

  // A11Y: Detect keyboard vs. mouse vs. touch input (for focus styling)
  loadjs(`https://cdnjs.cloudflare.com/ajax/libs/what-input/5.0.5/what-input.min.js`, () =>
    console.log(`👍 What-input is loaded`)
  )

  // Fetch polyfill for FormNetlify (IE)
  if (typeof window.fetch === `undefined`) {
    loadjs(`https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.4/fetch.min.js`, `fetch`, () =>
      console.log(`👍 Fetch is polyfilled`)
    )
  }
}
