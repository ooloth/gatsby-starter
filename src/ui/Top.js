function Top() {
  return (
    <>
      <SkipNav href="#main-content" />
      <Nav id="top">
        <h1>
          <Link href="/">Site Title</Link>
        </h1>
        <Link href="/animations/">Animations</Link>
        <MenuToggleAndOverlay />
      </Nav>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

// NOTE: using a "nav" here to allow "header" to be used as a unique landmark on each page (e.g. for the hero area)
const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  background-color: var(--light-pink);
  padding: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import { Link, SkipNav } from './elements'
import MenuToggleAndOverlay from './@ex-components/MenuToggleAndOverlay'

export default Top
