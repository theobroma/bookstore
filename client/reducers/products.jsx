import { SET_PRODUCTS, LOAD, FETCH_SUCCEEDED } from '../actions/types';

export default function products(state = [], action = {}) {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return action.payload;
    default: return state;
  }
}
