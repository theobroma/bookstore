import { ADD_TO_CART, SET_CART, DELETE_CART_ITEM } from '../actions/types';
import shortid from 'shortid';

export default function cart (state = [], action = {}) {
  switch(action.type) {
    case SET_CART:
      return action.payload;
    case DELETE_CART_ITEM:
      return state.filter(item => item.productId !== action.productId);
    default: return state;
  }
}
