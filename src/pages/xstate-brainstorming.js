import React from 'react'
import { useMachine } from '@xstate/react'

import Cart, { cartMachine } from '../diego-collaboration/cart'
import { orderMachine } from '../diego-collaboration/order'

function xStateBrainstormingPage() {
  const [orderState, sendToOrder] = useMachine(orderMachine)

  console.log('orderState: ', orderState.value)

  return (
    <main>
      <Cart />
      <p>
        Product 1
        <button onClick={() => sendToOrder('ADD', { productId: 12345 })}>
          Add to cart
        </button>
      </p>
    </main>
  )
}

export default xStateBrainstormingPage
