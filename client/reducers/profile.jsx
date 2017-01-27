import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import { SET_PROFILE, UPDATE_PROFILE } from '../actions/types';

const initialState = {
  username: "",
  firstname: "",
  lastname : ""
};

//[...state, action.payload] didnt work correctly
const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_PROFILE:
      return action.payload;
    default: return state;
  }
}


export function submitForm(values) {
  return dispatch => {
    return axios.post(`${apiPrefix}/profile`, values);
  }
}


export default reducer;
