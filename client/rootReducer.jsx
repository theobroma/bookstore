import { combineReducers } from 'redux';
import products from './reducers/products';
import flashMessages from './reducers/flashMessages';
import shoppingCart from './reducers/shoppingCart';

export default combineReducers({
  flashMessages,
  products,
  shoppingCart
});