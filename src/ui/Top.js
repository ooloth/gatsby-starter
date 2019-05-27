function Top() {
  const navLinks = useNavLinksData()
  const socialLinks = useSocialLinksData()

  return (
    <>
      <SkipNav href="#main-content" />
      <Nav id="top">
        <h1>
          <Link href="/">Site Title</Link>
        </h1>

        <Link href="/animations/">Animations</Link>

        <MenuToggleAndOverlay navLinks={navLinks} socialLinks={socialLinks} />
      </Nav>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

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
import useNavLinksData from '../data/examples/useNavLinksData'
import useSocialLinksData from '../data/examples/useSocialLinksData'

export default Top
