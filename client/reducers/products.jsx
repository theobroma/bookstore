import api from '../api';
import { apiPrefix } from '../../etc/config.json';
import { SET_PRODUCTS } from '../actions/types';

export default function products(state = [], action = {}) {
  switch(action.type) {
    case SET_PRODUCTS:
      return action.payload;
    default: return state;
  }
}