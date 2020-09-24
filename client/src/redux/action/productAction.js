import axios from 'axios'
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL
} from '../type';

// GET ALL PRODUCTS
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/products');
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });

  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: {
        msg: err.response.statusText,
        status: err.respons.status
      }
    });
  }
}

// GET ONE PRODUCT
export const getProduct = id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/products/${id}`);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })

  } catch (err) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: {
        msg: err.response.statusText,
        status: err.respons.status
      }
    });
  }
}