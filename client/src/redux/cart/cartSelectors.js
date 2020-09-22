import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// # of items added to cart
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQtn, cartItem) => accumulatedQtn + cartItem.quantity, 0)
);

// subtotal of cart items
export const selectCartSubtotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQtn, cartItem) =>
    accumulatedQtn + cartItem.quantity * cartItem.price, 0)
);