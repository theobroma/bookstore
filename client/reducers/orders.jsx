import _findIndex from 'lodash/findIndex';
import { FETCH_ORDERS, DELETE_ORDERS } from '../actions/types';

const initialState = [];
export default function cart(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_ORDERS:
      return action.payload;
    case DELETE_ORDERS:
      return initialState;
    default: return state;
  }
}
