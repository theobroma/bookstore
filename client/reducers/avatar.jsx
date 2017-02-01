import { FETCH_AVATAR } from '../actions/types';

export default function avatar(state = [], action = {}) {
  switch (action.type) {
    case FETCH_AVATAR:
      return action.payload;
    default: return state;
  }
}
