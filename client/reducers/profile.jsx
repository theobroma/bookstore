import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import { FETCH_PROFILE, UPDATE_PROFILE } from '../actions/types';

const initialState = {
  username: "",
  firstname: "",
  lastname : ""
};

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCH_PROFILE:
      return {...state, ...action.payload};
    default: return state;
  }
}

export function submitForm(values) {
  return dispatch => {
    return axios.post(`${apiPrefix}/profile`, values);
  }
}

export default reducer;
