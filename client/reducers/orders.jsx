import _findIndex from 'lodash/findIndex';
import { FETCH_ORDERS } from '../actions/types';

export default function cart(state = [], action = {}) {
  switch (action.type) {
    case FETCH_ORDERS:
      return action.payload;
    default: return state;
  }
}
