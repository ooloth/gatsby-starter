/*

Overview
========

A basic state chart for limiting the initial number of items shown.

1. Before user has clicked view all, number of visible items is based on the viewport width (and automatically updates as the viewport width changes)
2. Once the user clicks "View All", all items are shown and the number of items is never limited again.

Instructions:
============

1. Set the initial context externally via withContext(); see https://github.com/davidkpiano/xstate/blob/b1d879106255b4a4067ebcccbf0c3316569bcb65/docs/guides/machines.md#initial-context
2. See Steve Haid's Testimonials.js for an example implementation

*/

export const limitMachine = Machine(
  {
    id: 'limitMachine',
    context: {
      limit: 3, // update default externally
      limitsByScreen: { xl: 6, sm: 4, xs: 3 }, // update defaults externally
      screen: 'xs', // update default externally
    },
    initial: 'limited',
    states: {
      limited: {
        onEntry: 'setLimitByScreen',
        on: {
          RECALCULATE_LIMIT: 'limited',
          VIEW_ALL: {
            target: 'unlimited',
            actions: 'showAllItems',
          },
        },
      },

      unlimited: {},
    },
  },
  {
    actions: {
      setLimitByScreen: (ctx, e) => setLimitByScreen(ctx, e),
      showAllItems: assign({ limit: () => 999 }),
    },
  }
)

///////////////////////////////////////////////////////////////////////////////////

function setLimitByScreen(ctx, event) {
  // If triggered by resizing the viewport, update the screen value in context
  if (typeof event.screen !== `undefined`) ctx.screen = event.screen

  ctx.limit = ctx.limitsByScreen[ctx.screen]
}

///////////////////////////////////////////////////////////////////////////////////

export function useRecalculateLimit(state, send) {
  const sm = useMediaQuery(`(min-width: 36em)`)
  const md = useMediaQuery(`(min-width: 48em)`)
  const lg = useMediaQuery(`(min-width: 62em)`)
  const xl = useMediaQuery(`(min-width: 75em)`)

  function recalculateLimit() {
    let screen = `xs`
    if (sm && `sm` in state.context.limitsByScreen) screen = `sm`
    if (md && `md` in state.context.limitsByScreen) screen = `md`
    if (lg && `lg` in state.context.limitsByScreen) screen = `lg`
    if (xl && `xl` in state.context.limitsByScreen) screen = `xl`

    send({ type: `RECALCULATE_LIMIT`, screen: screen })
  }

  useEffect(() => recalculateLimit(), [sm, md, lg, xl])
}

///////////////////////////////////////////////////////////////////////////////////

export function limitItems(state, items) {
  return items.slice(0, state.context.limit)
}

///////////////////////////////////////////////////////////////////////////////////

import { useEffect } from 'react'
import { Machine, assign } from 'xstate'

import useMediaQuery from '../logic/useMediaQuery'
