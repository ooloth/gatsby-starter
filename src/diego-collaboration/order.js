/*

Overview:

1. Cart Context = store current state of Shopify order in progress
2. Cart machine = control overall cart UI state (states = open, closed)
3. Order machine = store state of shopify order

Inspiration: 

- xstate todo example: https://xstate.js.org/docs/examples/todomvc.html
- gatsby store order form: https://github.com/gatsbyjs/store.gatsbyjs.org/blob/5d67bc414911aae7bec355b63f6214a5b2a7f88f/src/components/ProductPage/ProductForm.js

Questions:

- gatsby store uses Apollo + Shopify; would that make life easier for us? (I have no Apollo experience)

*/

import React from 'react'
import { Machine } from 'xstate'
import { useMachine } from '@xstate/react'

///////////////////////////////////////////////////////////////

// TODO: replace placeholder data with an API to practice fetching states:

export const orderItems = [
  {
    name: 'Product 1',
    productId: 12345
  },
  {
    name: 'Product 2',
    productId: 67890
  }
]

///////////////////////////////////////////////////////////////

function Order() {
  const [orderState, sendToOrder] = useMachine(orderMachine)

  console.log(`orderState: `, orderState.value)

  return (
    <>
      <p>Order state: {orderState.value}</p>
      <p>Order data:</p>
      <pre></pre>

      <ul>
        {orderItems.map(item => (
          <li>
            <p>{item.name}</p>
            <button onClick={() => sendToOrder('REMOVE', { productId: 12345 })}>
              Remove item
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

// Controls the order data used by the cart
// Should be independent of the cart UI and updatable while the cart is closed, e.g. when clicking an "Add to cart" button somewhere on the site
// Should be kept updated in the background while the user navigates and interacts with the site
export const orderMachine = Machine({
  id: 'order',
  initial: 'loading', // when the site loads, should we immediately load any current order in the bg?
  // context: {
  //   items: [
  //     // ...array of Shopify products in the cart with their quantities
  //     // fetch asyncronously from local storage, shopify api, etc
  //   ]
  // },
  states: {
    // CRUD basically...
    loading: {
      // ...fetching sequence
      // transition to 'loaded' when data is ready
      on: {
        RESOLVE: 'loaded',
        REJECT: 'failure'
      }
    },
    loaded: {
      // show current order items
      // transition to 'updating' when order changes (e.g. add/remove product from order, change #)
      on: {
        ADD: {
          target: 'updating',
          actions: ['addItemToShopifyOrder'] // TODO: attach productId
        },
        REMOVE: {
          target: 'updating',
          actions: ['removeItemFromShopifyOrder'] // TODO: attach productId
        },
        UPDATE_QUANTITY: {
          target: 'updating',
          actions: ['updateItemQuantityInShopifyOrder'] // TODO: attach productId + new quantity
        }
        // ...etc
      }
    },
    updating: {
      // ...fetching sequence(s)
      // TODO: break into crud
      on: {
        RESOLVE: 'loaded',
        REJECT: 'failure'
      }
    }
  }
})

const fetchingStates = {
  initial: 'idle',
  states: {
    idle: {
      on: {
        FETCH: 'loading'
      }
    },
    loading: {
      entry: 'fetchDataFromShopify',
      on: {
        RESOLVE: 'success',
        REJECT: 'failure'
      }
    },
    success: {
      type: 'final'
    },
    failure: {
      on: {
        RETRY: 'loading'
      }
    }
  }
}

async function fetchDataFromShopify() {}
async function addItemToShopifyOrder() {}
async function removeItemFromShopifyOrder() {}
async function updateItemQuantityInShopifyOrder() {}

export default Order
