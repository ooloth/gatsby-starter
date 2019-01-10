function Top({ navLinks, socialLinks }) {
  return (
    <Header>
      <Heading as="h1">Site Title</Heading>
      <SkipNav href="#main-content" />
      {/* <BurgerAndOverlay navLinks={navLinks} /> */}
    </Header>
  )
}

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'

import { Header, Heading, SkipNav } from '../elements'
// import BurgerAndOverlay from '../components/examples/BurgerAndOverlay'

export default Top
