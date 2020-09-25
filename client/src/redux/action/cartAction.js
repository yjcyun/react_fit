import { ADD_ITEM, CLEAR_ITEM, REMOVE_ITEM, TOGGLE_SIDECART } from "../type";

// TOGGLE SIDE CART
export const toggleSideCart = () => ({ type: TOGGLE_SIDECART });

// ADD ITEM TO CART
export const addItem = (item, qty) => dispatch => {
  dispatch({ type: ADD_ITEM, payload: [item, qty] });
}

// REMOVE ITEM FROM CART
export const removeItem = item => ({ type: REMOVE_ITEM, payload: item });

// CLEAR ITEM FROM CART
export const clearItem = item => dispatch => {
  dispatch({ type: CLEAR_ITEM, payload: item });
}