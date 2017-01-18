import { combineReducers } from 'redux';
import products from './reducers/products';
import flashMessages from './reducers/flashMessages';

export default combineReducers({
  flashMessages,
  products
});