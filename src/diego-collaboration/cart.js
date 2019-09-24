/*

This machine simply controls the appearance/disappearance of the cart UI.

The order data should be updatable from anywhere on the site (e.g. 
various "Add to Cart" buttons scattered around the site) regardless 
of whether the cart UI is visually open.

*/

import React from 'react'
import { Machine } from 'xstate'
import { useMachine } from '@xstate/react'

import Order, { orderMachine } from './order'

///////////////////////////////////////////////////////////////

export const cartMachine = Machine({
  id: 'cart',
  initial: 'closed',
  states: {
    closed: {
      on: {
        OPEN: 'open'
      }
    },
    open: {
      on: {
        CLOSE: 'closed'
      }
    }
  }
})

///////////////////////////////////////////////////////////////

function CartModal() {
  return <aside>Cart Modal</aside>
}

///////////////////////////////////////////////////////////////

function Cart() {
  const [cartState, sendToCart] = useMachine(cartMachine)
  const isOpen = cartState.value === `open`

  function toggleCartModal() {
    isOpen ? sendToCart('CLOSE') : sendToCart('OPEN')
  }

  console.log(`cartState: `, cartState.value)

  return (
    <>
      <p>Cart state: {cartState.value}</p>

      <button onClick={toggleCartModal}>
        [cart icon button to toggle cart UI]
      </button>

      {isOpen && (
        <CartModal>
          {/* visual representation of order */}
          {/* TODO: move order state to context so it doesn't disappear when the cart closes */}
          <Order />
        </CartModal>
      )}
    </>
  )
}

///////////////////////////////////////////////////////////////

export default Cart
