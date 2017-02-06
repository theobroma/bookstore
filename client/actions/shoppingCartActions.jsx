import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import { ADD_TO_CART, SET_CART, DELETE_CART_ITEM, QUANTITY_INCREMENT, QUANTITY_DECREMENT } from './types';

export function onAddToCart(data) {
  return dispatch => axios.post(`${apiPrefix}/cart`, data);
}

export function onIncrement(productId) {
  return dispatch => dispatch({
    type: QUANTITY_INCREMENT,
    payload: productId
  });
}

export function onDecrement(productId) {
  return dispatch => dispatch({
    type: QUANTITY_DECREMENT,
    payload: productId
  });
}

export function fetchCart() {
  return function (dispatch) {
    axios.get(`${apiPrefix}/cart`)
    .then((response) => {
      dispatch({
        type: SET_CART,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export function onItemDelete(productId) {
  return dispatch => axios.delete(`${apiPrefix}/cart/${productId}`)
    .then(() => {
      dispatch({
        type: DELETE_CART_ITEM,
        productId
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
