import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './reducers/products';
import flashMessages from './reducers/flashMessages';
import shoppingCart from './reducers/shoppingCart';
import auth from './reducers/auth';
import profile from './reducers/profile';
import avatar from './reducers/avatar';
import account from './reducers/account';

export default combineReducers({
  flashMessages,
  products,
  auth,
  shoppingCart,
  profile,
  avatar,
  form: formReducer,
  account
});
