import axios from 'axios';
import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../api/index';

// 1. worker saga
export function* fetchProducts(action) {
   try {
      const {data} = yield call(axios.get, '/api/books');
      console.log( data);
      yield put({type: "FETCH_SUCCEEDED", payload: data})

   } catch (error) {
      yield put({type: "FETCH_FAILED", payload: error})
   }
}
//2 watcher saga
export function* watchFetchProducts() {
  yield takeEvery("LOAD", fetchProducts)
}

// 3. root saga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    watchFetchProducts()
  ]
}
