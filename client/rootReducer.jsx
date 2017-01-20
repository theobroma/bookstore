import { combineReducers } from 'redux';
import products from './reducers/products';
import flashMessages from './reducers/flashMessages';
import shoppingCart from './reducers/shoppingCart';
import auth from './reducers/auth';

export default combineReducers({
  flashMessages,
  products,
  auth,
  shoppingCart
});