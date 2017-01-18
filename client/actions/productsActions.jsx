import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import { SET_PRODUCTS } from '../actions/types';

export function fetchProducts() {
  return function(dispatch) {
    axios.get(`${apiPrefix}/books`)
    .then(response => {
      dispatch({
        type: SET_PRODUCTS,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}