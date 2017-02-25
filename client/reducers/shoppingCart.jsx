import _findIndex from 'lodash/findIndex';
import expect from 'expect';
import { ADD_TO_CART, SET_CART, DELETE_CART_ITEM, DELETE_CART, QUANTITY_DECREMENT, QUANTITY_INCREMENT,
  FETCHING_CART, FETCHING_CART_SUCCESS, FETCHING_CART_FAILURE} from '../actions/types';

/*const initialState = []
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
*/

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

const cartItem = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        ...action.item
      };
    case QUANTITY_DECREMENT:
      return state
    case QUANTITY_INCREMENT:
      return state
    default:
      return state
  }
}



export default function products (state = initialState, action) {
  switch (action.type) {
    case FETCHING_CART:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCHING_CART_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case DELETE_CART_ITEM:
      console.log(state);
      let newData = state.data.filter(item => item.productId !== action.productId);
      return {...state,data:newData}
    case DELETE_CART:
      return initialState;
    case ADD_TO_CART:
      if (_findIndex(state.data, ['productId', action.item.productId]) == -1) {
        return {
        ...state,data:[...state.data, cartItem(undefined, action)]
        }
      } else {
        return state;
      }
    case QUANTITY_DECREMENT:
      let pos = state.data.map(function(e) { return e.productId===action.productId; }).indexOf(true);
      let newQuantity=1;
      if(state.data[pos].quantity>2){
        newQuantity = state.data[pos].quantity-1;
      }
      let newArrPrev = state.data.slice(0,pos);
      let newArrNext = state.data.slice(pos+1);
      let newObj = {...state.data[pos],quantity:newQuantity};
      newArrPrev.push(newObj);
      newData = [...newArrPrev, ...newArrNext];
      return {...state,data:newData}
    case QUANTITY_INCREMENT:
      pos = state.data.map(function(e) { return e.productId===action.productId; }).indexOf(true);
      newQuantity=1;
      newQuantity = state.data[pos].quantity+1;
      newArrPrev = state.data.slice(0,pos);
      newArrNext = state.data.slice(pos+1);
      newObj = {...state.data[pos],quantity:newQuantity};
      newArrPrev.push(newObj);
      newData = [...newArrPrev, ...newArrNext];
      return {...state,data:newData}
    default:
      return state
  }
}
