function MenuToggleAndOverlay() {
  const navLinks = useNavLinksData()
  const socialLinks = useSocialLinksData()

  const [state, send] = useMachine(menuWithScrollLinksMachine)
  const isOpen = state.value === `open`

  const rootRef = useRef()
  useEffect(() => {
    if (typeof document !== `undefined` && !rootRef.current) {
      rootRef.current = document.getElementById('___gatsby')
      rootRef.current.style.transform = `translateZ(0)` // fixes blur in Safari
    }
  })

  // See: https://codesandbox.io/embed/zn2q57vn13
  const trail = {
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(25%)`,
    from: { opacity: 0, transform: `translateY(25%)` }
  }

  const configIn = { mass: 5, tension: 2000, friction: 200, precision: 0.00001 }
  const configOut = { mass: 5, tension: 4000, friction: 200 }

  const menuTransitionRef = useRef()
  const menuTransitions = useTransition(isOpen, null, {
    ref: menuTransitionRef,
    from: { x: 0, bg: `hsla(0, 100%, 100%, 0)`, blur: 0 },
    enter: { x: 1, bg: `hsla(0, 100%, 100%, 0.9)`, blur: 8 },
    leave: { x: 0, bg: `hsla(0, 100%, 100%, 0)`, blur: 0 },
    // See: https://twitter.com/ryanflorence/status/1108436669433171968
    // See: https://gist.github.com/ryanflorence/03a4b3d314c0525f2d5bd79a32bb5ef2
    onFrame: (item, state, props) => {
      if (item) {
        if (!rootRef.current) {
          rootRef.current = document.getElementById('___gatsby')
          rootRef.current.style.transform = `translateZ(0)` // fixes blur in Safari
        }
        rootRef.current.style.filter = `blur(${props.blur}px)`
      }
    },
    onRest: () => send('CLOSE_OVERLAY') // must manually close after dialog is out
  })

  const navLinkTrailRef = useRef()
  const navLinkTrail = useTrail(navLinks.length, {
    ref: navLinkTrailRef,
    config: isOpen ? configIn : configOut,
    ...trail
  })

  const socialLinkTrailRef = useRef()
  const socialLinkTrail = useTrail(socialLinks.length, {
    ref: socialLinkTrailRef,
    config: isOpen ? config.default : configOut,
    ...trail
  })

  // Orchestrate the 3 animations above in a sequence
  // See: https://codesandbox.io/embed/2v716k56pr
  useChain(
    isOpen
      ? [menuTransitionRef, navLinkTrailRef, socialLinkTrailRef]
      : [navLinkTrailRef, socialLinkTrailRef, menuTransitionRef],
    [0, isOpen ? 0.15 : 0.3, isOpen ? 0.75 : 0.45]
  )

  return (
    <>
      <MenuButton onClick={() => send('OPEN')} aria-expanded="false">
        Menu with Scroll Links
      </MenuButton>

      {menuTransitions.map(
        ({ item, key, props: { x, bg } }) =>
          item && (
            <Overlay
              key={key}
              isOpen={state.value !== `closed`}
              onDismiss={() => send('CLOSE')}
              // style={{ backgroundColor: bg }}
            >
              <Content
                style={{
                  transformOrigin: `right`,
                  transform: x.interpolate(x => `scaleX(${x})`)
                }}
              >
                <MenuContent
                  closeDialog={event =>
                    send('CLOSE', { href: event.target.href, e: event })
                  }
                  navLinks={navLinks}
                  navLinkTrail={navLinkTrail}
                  socialLinks={socialLinks}
                  socialLinkTrail={socialLinkTrail}
                />
              </Content>
            </Overlay>
          )
      )}
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const MenuButton = styled.button``

const Overlay = styled(animated(DialogOverlay))`
  && {
    z-index: 101;
    overflow: hidden;
    background-color: transparent;
  }
`

const Content = styled(animated(DialogContent))`
  && {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    box-shadow: var(--shadow5);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: var(--light-pink);
    padding: 0;
    width: auto;
  }
`

///////////////////////////////////////////////////////////////////////////////////

function MenuContent({
  closeDialog,
  navLinks,
  navLinkTrail,
  socialLinks,
  socialLinkTrail
}) {
  return (
    <Aside>
      <CloseButton onClick={closeDialog}>Close</CloseButton>

      <nav aria-label="Main navigation">
        <NavLinks>
          {navLinkTrail.map((props, i) => (
            <animated.li key={navLinks[i].node.href} style={props}>
              <NavLink href={navLinks[i].node.href} onClick={closeDialog}>
                {navLinks[i].node.text}
              </NavLink>
            </animated.li>
          ))}
        </NavLinks>
      </nav>

      <nav aria-label="Social media links" onClick={closeDialog}>
        <SocialLinks>
          {socialLinkTrail.map((props, i) => (
            <animated.li key={socialLinks[i].node.href} style={props}>
              <SocialLink href={socialLinks[i].node.href} onClick={closeDialog}>
                {socialLinks[i].node.text}
              </SocialLink>
            </animated.li>
          ))}
        </SocialLinks>
      </nav>
    </Aside>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Aside = styled.aside`
  padding: var(--s4);
  ${copy}
`

const CloseButton = styled.button``

const NavLinks = styled.ul`
  padding-top: var(--s5);
`

const SocialLinks = styled.ul`
  padding-top: var(--s5);
`

const MenuLink = styled(Link)``

const NavLink = styled(MenuLink)``

const SocialLink = styled(MenuLink)``

///////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { animated, config, useChain, useTrail, useTransition } from 'react-spring'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import { Link } from '../elements'
import useMachine from '../../logic/examples/useMachine'
import { menuWithScrollLinksMachine } from '../../logic/examples/menuWithScrollLinks'
import useNavLinksData from '../../queries/examples/useNavLinksData'
import useSocialLinksData from '../../queries/examples/useSocialLinksData'
import { copy } from '../../styles'

export default MenuToggleAndOverlay
