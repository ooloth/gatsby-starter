// Basic state chart for user toggled dialogs

export const dialogMachine = Machine(
  {
    id: 'dialogMachine',
    initial: 'closed',
    states: {
      closed: {
        on: { OPEN: 'open' },
      },

      open: {
        onEntry: 'lockScrolling',
        on: { CLOSE: 'closing' },
      },

      closing: {
        on: { CLOSE_OVERLAY: 'closed' },
        onExit: 'unlockScrolling',
      },
    },
  },
  {
    actions: {
      lockScrolling: () => noScroll.on(),
      unlockScrolling: () => noScroll.off(),
    },
  }
)

///////////////////////////////////////////////////////////////////////////////////

import { Machine } from 'xstate'
import noScroll from 'no-scroll'
