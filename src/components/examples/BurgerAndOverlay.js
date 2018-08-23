class BurgerAndOverlay extends Component {
  state = { menuOpen: false }

  // Bind modal to appElement (http://reactcommunity.org/react-modal/accessibility/)
  componentDidMount = () => Modal.setAppElement(`#___gatsby`)

  // Handle CSS hover effects with GSAP so I can reset the spans to the right transformY
  // If menu is closed, expand burger layers on hover (only if closed to avoid conflicts with rotate animation)
  handleBurgerMouseEnter = () => {
    if (!this.state.menuOpen) {
      loadjs.ready(`gsap`, () => {
        TweenLite.to(this.burgerTop, 0.05, { y: `-10px` })
        TweenLite.to(this.burgerBottom, 0.05, { y: `10px` })
      })
    }
  }

  // If menu is closed, contract burger layers after hover
  handleBurgerMouseLeave = () => {
    if (!this.state.menuOpen) {
      loadjs.ready(`gsap`, () => {
        TweenLite.to(this.burgerTop, 0.05, { y: `-8px` })
        TweenLite.to(this.burgerBottom, 0.05, { y: `8px` })
      })
    }
  }

  handleBurgerClick = () => {
    const { menuOpen } = this.state

    loadjs.ready(`gsap`, () => {
      // Define burger animation timeline
      const menuToggle = new TimelineLite({ paused: true })
      menuToggle
        .fromTo(this.burgerTop, 0.1, { y: `-10px` }, { y: 0 }, `collapse`)
        .fromTo(this.burgerBottom, 0.1, { y: `10px` }, { y: 0 }, `collapse`)
        .fromTo(this.burgerMiddle, 0.3, { opacity: 1 }, { opacity: 0 })
        .fromTo(this.burgerTop, 0.1, { rotationZ: 0 }, { rotationZ: -45 }, `rotate`)
        .fromTo(
          this.burgerBottom,
          0.1,
          { rotationZ: 0 },
          { rotationZ: 45 },
          `rotate`
        )

      if (menuOpen) {
        menuToggle.reverse() // animate burger
        this.closeMenu()
      } else {
        menuToggle.restart() // animate burger
        this.openMenu()
      }
    })
  }

  openMenu = () => {
    // Add class to body to use in _react-headroom.css while menu is open
    // TODO: Update 200 to whatever the pinStart prop is in the end in Header.js
    // if (window.scrollY >= 200) {
    //   document.querySelector(`body`).classList.add(`menu-open`)
    // }

    this.setState({ menuOpen: true })
    noScroll.on()
  }

  closeMenu = () => {
    // Remove class from body used in _react-headroom.css while menu is open
    // document.querySelector(`body`).classList.remove(`menu-open`)

    noScroll.off()
    this.setState({ menuOpen: false })
  }

  render() {
    const { menuOpen } = this.state
    const { navLinks } = this.props

    return (
      <>
        <button
          ref={el => (this.burger = el)}
          onMouseEnter={this.handleBurgerMouseEnter}
          onMouseLeave={this.handleBurgerMouseLeave}
          onClick={this.handleBurgerClick}
          className="burger"
        >
          <span className="sr-only">Click to open menu main navigation</span>
          <span
            ref={el => (this.burgerTop = el)}
            className="burger-layer top animate"
          />
          <span
            ref={el => (this.burgerMiddle = el)}
            className="burger-layer animate"
          />
          <span
            ref={el => (this.burgerBottom = el)}
            className="burger-layer bottom animate"
          />
        </button>

        <Modal
          isOpen={menuOpen}
          onRequestClose={this.handleBurgerClick}
          closeTimeoutMS={500} // match exit animation timing
          overlayClassName="menu-modal-overlay fixed fill"
          className="menu-modal-content absolute right-0 top-0 bottom-0 overflow-auto scrolling-touch bg-light-yellow tr"
        >
          <MenuContent navLinks={navLinks} closeMenu={this.handleBurgerClick} />
        </Modal>
      </>
    )
  }
}

/*
 *
 * Menu Content
 * 
 */

const MenuContent = ({ navLinks, closeMenu }) => (
  <aside onClick={closeMenu} className="pt6 pb4 pr3 md:pr4 lg:pr5 w-100 h-100">
    <nav aria-label="Main navigation" onClick={closeMenu}>
      <ul className="pl6 sm:ml4 lg:ml5">
        {nav.map((link, i) => {
          return (
            <li key={i}>
              <Link
                to={link.url}
                className="db mb3 open-sans f3"
                activeClassName="blue"
              >
                {link.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  </aside>
)

const nav = [{ url: `/`, text: `Home` }, { url: `/page-2/`, text: `Page 2` }]

/*
 *
 * Imports & Exports
 * 
 */

import React, { Component } from 'react'
import { Link } from 'gatsby'
import loadjs from 'loadjs'
import Modal from 'react-modal'
import noScroll from 'no-scroll'

export default BurgerAndOverlay
