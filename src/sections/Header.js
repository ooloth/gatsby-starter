const Header = ({ navLinks }) => (
  <header id="top" className="bg-black pa3 tc sans-serif white">
    <h1>I'm a header</h1>
    <a href="#main-content" className="sr-only">
      Skip Navigation
    </a>
    {/* <nav>Add nav links...</nav> */}
    <BurgerAndOverlay navLinks={navLinks} />
  </header>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'

import BurgerAndOverlay from '../components/examples/BurgerAndOverlay'

export default Header
