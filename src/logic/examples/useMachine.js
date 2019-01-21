export function useMachine(machine) {
  // Keep track of the current machine state
  const [current, setCurrent] = useState(machine.initialState)

  // Start the service (only once!)
  const service = useMemo(
    () =>
      interpret(machine)
        .onTransition(state => {
          // Update the current machine state when a transition occurs
          setCurrent(state)
        })
        .start(),
    []
  )

  // Stop the service when the component unmounts
  useEffect(() => {
    return () => service.stop()
  }, [])

  return [current, service.send]
}

///////////////////////////////////////////////////////////////////////////////////

import { useState, useMemo, useEffect } from 'react'
import { interpret } from 'xstate/lib/interpreter' /*) 

function Toggle() {
  const [current, send] = useMachine(toggleMachine);
  return (
    <button onClick={() => send('TOGGLE')}>
      {current.matches('inactive') ? 'Off' : 'On'}
    </button>
  );
}

*/

///////////////////////////////////////////////////////////////////////////////////

/*

Interpret and use XState machines with functional components.

See: https://xstate.js.org/docs/recipes/react.html#hooks
See: https://xstate.js.org/docs/examples/todomvc.html

import { useMachine } from '../path/to/useMachine';

const toggleMachine = Machine(/* config... */
