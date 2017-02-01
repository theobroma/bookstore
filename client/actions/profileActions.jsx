import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import { SET_PROFILE } from '../actions/types';

export function fetchProfile() {
  return dispatch => {
    axios.get(`${apiPrefix}/profile`)
    .then(response => {
      dispatch({
        type: SET_PROFILE,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export function fetchAvatar() {
  return dispatch => {
    axios.get(`${apiPrefix}/profile/avatar`)
    .then(response => {
      dispatch({
        type: SET_PROFILE,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}
