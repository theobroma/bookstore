import { ADD_TO_CART,SET_CART } from '../actions/types';
import shortid from 'shortid';

export default function cart (state = [], action = {}) {
  switch(action.type) {
    case SET_CART:
      return action.payload;
    default: return state;
  }
}