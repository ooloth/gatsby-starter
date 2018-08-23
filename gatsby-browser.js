/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/*
 *
 * Urgent polyfills (needed before first render)
 * 
 */

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  // TODO: will Babel 7 polyfill this for me?
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
 * Non-urgent polyfills and scripts (needed after first render)
 * 
 */

import loadjs from 'loadjs'

export const onInitialClientRender = () => {
  // A11Y: Detect keyboard vs. mouse vs. touch input (for focus styling)
  if (!loadjs.isDefined(`what-input`)) {
    loadjs(
      `https://cdnjs.cloudflare.com/ajax/libs/what-input/5.0.5/what-input.min.js`,
      () => console.log(`👍 What-input is loaded`)
    )
  }

  // GSAP for site-wide animations
  // TODO: add TimelineLite if needed
  // TODO: remove any parts I'm not using
  if (!loadjs.isDefined(`gsap`)) {
    loadjs(
      [
        `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenLite.min.js`,
        `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/CSSPlugin.min.js`,
        `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineLite.min.js`,
        `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js`,
        `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineMax.min.js`
      ],
      `gsap`,
      () => console.log(`👍 GSAP is loaded`)
    )
  }

  // GSAP's scrollToPlugin for sitewide smooth-scrolling
  // TODO: remove if not using
  if (!loadjs.isDefined(`scrollToPlugin`)) {
    loadjs(
      `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.0/plugins/ScrollToPlugin.min.js`,
      `scrollToPlugin`,
      () => console.log(`👍 scrollToPlugin is loaded`)
    )
  }

  // Google Analytics
  // loadjs(`https://www.googletagmanager.com/gtag/js?id=UA-9710963-3`, () => {
  //   window.dataLayer = window.dataLayer || []
  //   function gtag() {
  //     dataLayer.push(arguments)
  //   }

  //   gtag(`js`, new Date())
  //   gtag(`config`, `UA-9710963-3`)
  // })

  // TODO: Remove if Babel 7 auto-polyfills this...
  // Fetch polyfill for FormNetlify (IE)
  // if (typeof window.fetch === `undefined`) {
  //   loadjs(
  //     `https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.4/fetch.min.js`,
  //     `fetch`,
  //     () => console.log(`👍 Fetch is polyfilled`)
  //   )
  // }
}
