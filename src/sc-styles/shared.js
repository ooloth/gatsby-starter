import { css, keyframes } from 'styled-components'

// TODO: move all component styles here (the @apply ones)

/* Breakpoints
 * =========== */

export const screens = {
  sm: `min-width: 36em`,
  md: `min-width: 48em`,
  lg: `min-width: 62em`,
  xl: `min-width: 75em`
}

/* Styling Combinations
 * ==================== */

/**
 * Container for limited-width content.
 */

export const container = css`
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--size5);
  padding-right: var(--size5);
  max-width: var(--size20);

  @media (${screens.md}) {
    padding-left: var(--size7);
    padding-right: var(--size7);
  }

  @media (${screens.xl}) {
    padding-left: var(--size9);
    padding-right: var(--size9);
  }

  /* Use a smaller max width in IE? */
  /* @supports (display: grid) { max-width: ${p => p.theme.s20} } */
`

/**
 * Visually hide screen reader text.
 */

// See: https://css-tricks.com/small-tweaks-can-make-huge-impact-websites-accessibility/#article-header-id-5

export const srOnly = css`
  display: block;
  position: absolute;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(1px);
  height: 1px;
  width: 1px;
  white-space: nowrap;
`

/**
 * Truncate long text.
 */

export const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  white-space: nowrap;
`

/* Animations
 * ========== */

/**
 * Spin one rotation.
 */

export const spin = keyframes`
  to { transform: rotate(360deg) }
`

/* How to Use
 * ========== */

// const StyledComponent = styled.div`
//   ${container}
// `

// const StyledComponent = styled.div`
//   ${(container, truncate)}
// `
