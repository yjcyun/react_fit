import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { alertReducer } from './alertReducer';
import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { productReducer } from './productReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  product: productReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);