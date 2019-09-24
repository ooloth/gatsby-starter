/* 

TODO: To persist the order data at the app level, I believe we need to:

1. store the order data near the top of the tree (store in orderMachine's internal context?)
2. transmit it to the tree via a Provider
3. consume it via context

Diego, any corrections to make to this approach?

Inspiration:

- gatsby store: https://github.com/gatsbyjs/store.gatsbyjs.org/blob/master/src/context/StoreContext.js

*/
