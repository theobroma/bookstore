import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(`${apiPrefix}/users`, userData);
  }
}
