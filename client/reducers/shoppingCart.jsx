import { ADD_TO_CART, SET_CART, DELETE_CART_ITEM, QUANTITY_DECREMENT, QUANTITY_INCREMENT   } from '../actions/types';
import shortid from 'shortid';

export default function cart (state = [], action = {}) {
  switch(action.type) {
    case SET_CART:
      return action.payload;
    case DELETE_CART_ITEM:
      return state.filter(item => item.productId !== action.productId);
    case QUANTITY_DECREMENT:
      return action.payload;
    case QUANTITY_INCREMENT:
      return action.payload;
    default: return state;
  }
}
