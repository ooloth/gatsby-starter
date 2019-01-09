// TODO: move all component styles here (the @apply ones)

import { css, keyframes } from 'styled-components'

/* MEDIA QUERIES
 * ================================================================ */

const breakpoints = {
  sm: 36,
  md: 48,
  lg: 62,
  xl: 75
}

// Iterate through the sizes and create a media template
// See: https://www.styled-components.com/docs/advanced#media-templates
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

/* STYLING COMBOS
 * ================================================================ */

/**
 * Container for limited-width content.
 */

// Switch to a grid-based solution instead? (e.g. 1fr on the outsides...)
export const container = css`
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--s4);
  padding-right: var(--s4);
  max-width: var(--s17);

  ${media.md`
    padding-left: var(--s6);
    padding-right: var(--s6);
  `}

  ${media.xl`
    padding-left: var(--s8);
    padding-right: var(--s8);
  `}

  /* Use a smaller max width in IE? */
  /* @supports (display: grid) { max-width: ${p => p.theme.s20} } */
`

/**
 * Visually hide screen reader text.
 */

// NOTE: I moved this to the SRText component

// See: https://css-tricks.com/small-tweaks-can-make-huge-impact-websites-accessibility/#article-header-id-5

// export const srOnly = css`
//   display: block;
//   position: absolute;
//   overflow: hidden;
//   clip: rect(1px 1px 1px 1px);
//   clip: rect(1px, 1px, 1px, 1px);
//   clip-path: inset(1px);
//   height: 1px;
//   width: 1px;
//   white-space: nowrap;
// `

/**
 * Truncate long text.
 */

export const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  white-space: nowrap;
`

/* ANIMATIONS
 * ================================================================ */

/**
 * Spin one rotation.
 */

export const spin = keyframes`
  to { transform: rotate(360deg) }
`

/* INSTRUCTIONS
 * ================================================================ */

// const StyledComponent = styled.div`
//   ${container}
// `

// const StyledComponent = styled.div`
//   ${(container, truncate)}
// `
