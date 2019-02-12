/*

A variation of dialogMachine for off-canvas menus with scroll-to-id links that

1. Saves the link href if clicking a link is what caused the menu to close
2. Waits to smooth scroll until the menu's exit animation is finished

*/

export const menuWithScrollLinksMachine = Machine(
  {
    id: 'menuWithScrollLinksMachine',
    initial: 'closed',
    context: {
      href: ``,
    },
    states: {
      closed: {
        on: { OPEN: 'open' },
      },

      open: {
        onEntry: 'lockScrolling',
        on: {
          CLOSE: {
            target: 'closing',
            actions: 'saveHrefIfLinkClicked',
          },
        },
      },

      closing: {
        on: { CLOSE_OVERLAY: 'closed' },
        onExit: ['unlockScrolling', 'scrollToIdIfHrefSaved'],
      },
    },
  },
  {
    actions: {
      lockScrolling: () => noScroll.on(),
      saveHrefIfLinkClicked: (ctx, event) => saveHrefIfLinkClicked(ctx, event),
      unlockScrolling: () => noScroll.off(),
      scrollToIdIfHrefSaved: ctx => scrollToIdIfHrefSaved(ctx),
    },
  }
)

///////////////////////////////////////////////////////////////////////////////////

function saveHrefIfLinkClicked(ctx, event) {
  if (event.href && event.e) {
    event.e.preventDefault()
    ctx.href = event.href
  }
}

///////////////////////////////////////////////////////////////////////////////////

function scrollToIdIfHrefSaved(ctx) {
  if (ctx.href) {
    scrollToId(ctx.href)
    ctx.href = ``
  }
}

///////////////////////////////////////////////////////////////////////////////////

import { Machine } from 'xstate'
import noScroll from 'no-scroll'

import scrollToId from '../logic/scrollToId'
