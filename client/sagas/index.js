import axios from 'axios';
import { delay } from 'redux-saga';
import { call, put, select, take, takeEvery } from 'redux-saga/effects';
import api from '../api/index';
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE,
FETCHING_CART, FETCHING_CART_SUCCESS, FETCHING_CART_FAILURE, ADD_TO_CART, QUANTITY_DECREMENT, QUANTITY_INCREMENT } from '../actions/types';

// 1. worker saga
export function* fetchProducts(action) {
   try {
      const {data} = yield call(axios.get, '/api/books');
      console.log( data);
      yield put({type: FETCHING_DATA_SUCCESS, data})

   } catch (error) {
      yield put({type: FETCHING_DATA_FAILURE, error})
   }
}
//2 watcher saga
export function* watchFetchProducts() {
  yield takeEvery(FETCHING_DATA, fetchProducts)
}
/*==========================================================*/
// 1. worker saga
export function* fetchCart(action) {
   try {
      const {data} = yield call(axios.get, '/api/cart');
      console.log( data);
      yield put({type: FETCHING_CART_SUCCESS, data})

   } catch (error) {
      yield put({type: FETCHING_CART_FAILURE, error})
   }
}
//2 watcher saga
export function* watchFetchCart() {
  yield takeEvery(FETCHING_CART, fetchCart)
}

/*==========================================================*/
// 1. worker saga
export function* saveCart() {
  const action = yield take();
  const state = yield select();
  console.log(state.shoppingCart.data);
  yield call(axios.post, '/api/cart',state.shoppingCart.data);
}
//2 watcher saga
export function* watchSaveCart() {
  yield takeEvery(ADD_TO_CART, saveCart)
  yield takeEvery(QUANTITY_DECREMENT, saveCart)
  yield takeEvery(QUANTITY_INCREMENT, saveCart)
}





// 3. root saga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    watchFetchProducts(),
    watchFetchCart(),
    watchSaveCart()
  ]
}
