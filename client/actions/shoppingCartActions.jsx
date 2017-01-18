import { ADD_TO_CART } from './types';

export function onAddToCart(productId) {
  return {
    type: ADD_TO_CART,
    productId
  }
}
