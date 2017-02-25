import axios from 'axios';
import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../api/index';
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../actions/types';

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

// 3. root saga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    watchFetchProducts()
  ]
}
