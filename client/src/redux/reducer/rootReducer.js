import { combineReducers } from 'redux';
import { alertReducer } from './alertReducer';
import { authReducer } from './authReducer';
import { productReducer } from './productReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  product: productReducer
})