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

  // Array.from, Array.forEach and String.endsWith for react-pose (IE)
  // if (
  //   typeof window.Array.from === `undefined` ||
  //   typeof window.Array.prototype.forEach === `undefined` ||
  //   typeof window.String.prototype.endsWith === `undefined`
  // ) {
  //   if (!loadjs.isDefined(`react-pose-polyfills`)) {
  //     loadjs(
  //       `https://cdn.polyfill.io/v2/polyfill.min.js?features=Array.from,Array.prototype.forEach,String.prototype.endsWidth`,
  //       `react-pose-polyfills`,
  //       () =>
  //         console.log(
  //           `👍 Array.from, Array.forEach and String.endsWith are polyfilled`
  //         )
  //     )
  //   }
  // }
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
      `what-input`,
      () => console.log(`👍 What-input is loaded`)
    )
  }

  // GSAP for site-wide animations
  // TODO: remove any parts I'm not using
  if (!loadjs.isDefined(`gsap`)) {
    loadjs(
      [
        `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenLite.min.js`,
        `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js`,
        `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/CSSPlugin.min.js`,
        `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineMax.min.js`,
        `https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineLite.min.js`
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

  // Google Analytics (using ga-lite to allow caching)
  // See: https://github.com/jehna/ga-lite
  // Don't waste any time on this on localhost
  // if (window.location.hostname !== 'localhost') {
  //   if (!loadjs.isDefined(`ga-lite`)) {
  //     loadjs(
  //       `https://cdn.jsdelivr.net/npm/ga-lite@2/dist/ga-lite.min.js`,
  //       `ga-lite`,
  //       () => {
  //         // https://developers.google.com/analytics/devguides/collection/analyticsjs/cookies-user-id#automatic_cookie_domain_configuration
  //         galite('create', 'UA-XXXXXXX-X', 'auto') // auto prevents tracking on localhost
  //         galite('send', 'pageview')

  //         // See: https://github.com/jehna/ga-lite#onunload-tracking
  //         window.addEventListener('unload', () => {
  //           galite('send', 'timing', 'JS Dependencies', 'unload')
  //         })
  //       }
  //     )
  //   }
  // }

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
