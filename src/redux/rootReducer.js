import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import shopReducer from './shop/shopReducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer
})