import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import { FETCHING_DATA } from '../actions/types';

// Action Creators
export function loadProducts() {
  console.log('Action loadProducts');
  return {type: FETCHING_DATA};
}
