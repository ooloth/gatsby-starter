/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// const React = require(`react`)

/*
 *
 * Urgent polyfills (before first render)
 * 
 */

export const onClientEntry = () => {
  // NOTE: Don't polyfill Promise here (Gatsby already includes a Promise polyfill)

  // TODO: will Babel 7 polyfill this for me?
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

  // GSAP for site-wide animations
  loadjs(
    `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.0/TweenMax.min.js`,
    `gsap`,
    () => console.log(`👍 GSAP is loaded`)
  )

  // GSAP's scrollToPlugin for sitewide smooth-scrolling
  loadjs(
    `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.0/plugins/ScrollToPlugin.min.js`,
    `scrollToPlugin`,
    () => console.log(`👍 scrollToPlugin is loaded`)
  )
}

/*
 *
 * Non-urgent polyfills and global scripts (after first render)
 * 
 */

import loadjs from 'loadjs'

export const onInitialClientRender = () => {
  // A11Y: Detect keyboard vs. mouse vs. touch input (for focus styling)
  loadjs(
    `https://cdnjs.cloudflare.com/ajax/libs/what-input/5.0.5/what-input.min.js`,
    () => console.log(`👍 What-input is loaded`)
  )

  // Google Analytics
  // loadjs(`https://www.googletagmanager.com/gtag/js?id=UA-9710963-3`, () => {
  //   window.dataLayer = window.dataLayer || []
  //   function gtag() {
  //     dataLayer.push(arguments)
  //   }

  //   gtag(`js`, new Date())
  //   gtag(`config`, `UA-9710963-3`)
  // })

  // Symbol polyfill for lightbox-react (IE)
  // TODO: find a smaller, targeted polyfill for this...
  // if (typeof window.Symbol === `undefined`) {
  //   // NOTE: Just loading babel-polyfill after other solutions didn't quite work.
  //   // NOTE: Babel-polyfill does not include fetch, which is why it is separate below.
  //   loadjs(
  //     `https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js`,
  //     () => console.log(`👍 Babel-polyfill is loaded`)
  //   )
  // }

  // TODO: make sure Babel 7 auto-polyfills this...
  // Fetch polyfill for FormNetlify (IE)
  // if (typeof window.fetch === `undefined`) {
  //   loadjs(
  //     `https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.4/fetch.min.js`,
  //     `fetch`,
  //     () => console.log(`👍 Fetch is polyfilled`)
  //   )
  // }
}
