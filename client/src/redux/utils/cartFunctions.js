export const addItemToCart = (cartItems, itemToAdd) => {

  const itemAdded = itemToAdd[0];
  const qty = itemToAdd[1];

  // CHECK IF ITEM BEING ADDED ALREADY EXISTS IN CART
  const existingCartItem = cartItems.find(item => item.id === itemAdded.id);
  //  IF YES, ADD 1 TO QTY
  if (existingCartItem) {
    return cartItems.map(cartItem => (
      cartItem.id === itemAdded.id
        ? { ...cartItem, quantity: cartItem.quantity + qty }
        : cartItem
    ));
  }
  // IF NEWLY ADDED ITEM, SET QTY TO 1
  return [...cartItems, { ...itemAdded, quantity: qty }];
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  // CHECK IF ITEM BEING REMOVED EXISTS IN CART
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id);

  // IF THERE'S ONLY ONE ITEM, REMOVE ITEM ENTIRELY
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
  }
  // IF QTY > 1, SUBTRACT 1 FROM QTY
  return cartItems.map(cartItem => cartItem.id === itemToRemove
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  )
}