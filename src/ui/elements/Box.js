// TODO: add props for styling variants (e.g. 'container')
// TODO: set any dedicated custom properties here (like Heading.js)

// TODO: add propTypes to validate the type of each prop (e.g. a number for padding)

export const Box = styled.div`
  ${p => p.ga && `grid-area: ${p.ga};`}
  ${p => p.container && container}

  /* TODO: remove these now to avoid ever using them? */
  /* For prototyping only (TODO: refactor patterns into separate Box instances with their own local custom properties, e.g. --sectionPadding) */
  ${p => p.shadow && `box-shadow: var(--shadow5);`}

  ${p => p.m && `margin: var(--s${p.m});`}
  ${p => p.mv && `padding-top: var(--s${p.mv}); padding-bottom: var(--s${p.mv});`}
  ${p => p.mh && `padding-left: var(--s${p.mh}); padding-right: var(--s${p.mh});`}
  ${p => p.mt && `padding-top: var(--s${p.mt});`}
  ${p => p.mr && `padding-right: var(--s${p.mr});`}
  ${p => p.mb && `padding-bottom: var(--s${p.mb});`}
  ${p => p.ml && `padding-left: var(--s${p.ml});`}

  ${p => p.bg && `background-color: var(--${p.bg});`}

  ${p => p.p && `padding: var(--s${p.p});`}
  ${p => p.pv && `padding-top: var(--s${p.pv}); padding-bottom: var(--s${p.pv});`}
  ${p => p.ph && `padding-left: var(--s${p.ph}); padding-right: var(--s${p.ph});`}
  ${p => p.pt && `padding-top: var(--s${p.pt});`}
  ${p => p.pr && `padding-right: var(--s${p.pr});`}
  ${p => p.pb && `padding-bottom: var(--s${p.pb});`}
  ${p => p.pl && `padding-left: var(--s${p.pl});`}

  ${p => p.color && `color: var(--${p.color});`}
`

///////////////////////////////////////////////////////////////////////////////////

export const Article = props => <Box as="article" {...props} />
export const Header = props => <Box as="header" {...props} />
export const List = props => <Box as="ul" {...props} />
export const Main = props => <Box as="main" {...props} />
export const Nav = props => <Box as="nav" {...props} />
export const Section = props => <Box as="section" {...props} />

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import { container } from '../../styles/shared'
