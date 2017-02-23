import _findIndex from 'lodash/findIndex';
import { ADD_TO_CART, SET_CART, DELETE_CART_ITEM, DELETE_CART, QUANTITY_DECREMENT, QUANTITY_INCREMENT } from '../actions/types';

const initialState = []
export default function cart(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CART:
      return action.payload;
    case DELETE_CART_ITEM:
      return state.filter(item => item.productId !== action.productId);
    case DELETE_CART:
      return initialState;
    case QUANTITY_DECREMENT:
      return action.payload;
    case QUANTITY_INCREMENT:
      return action.payload;
    default: return state;
  }
}
