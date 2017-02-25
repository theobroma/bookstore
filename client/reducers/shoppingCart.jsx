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
      let pos = state.map(function(e) { return e.productId===action.productId; }).indexOf(true);
      let newQuantity=1;
      if(state[pos].quantity>2){
        newQuantity = state[pos].quantity-1;
      }
      let newArrPrev = state.slice(0,pos);
      let newArrNext = state.slice(pos+1);
      let newObj = {...state[pos],quantity:newQuantity};
      newArrPrev.push(newObj);
      return  [...newArrPrev, ...newArrNext];
    case QUANTITY_INCREMENT:
      pos = state.map(function(e) { return e.productId===action.productId; }).indexOf(true);
      newQuantity = state[pos].quantity+1;
      newArrPrev = state.slice(0,pos);
      newArrNext = state.slice(pos+1);
      newObj = {...state[pos],quantity:newQuantity};
      newArrPrev.push(newObj);
      return  [...newArrPrev, ...newArrNext];
    default: return state;
  }
}
