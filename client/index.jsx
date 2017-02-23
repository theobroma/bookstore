import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import ReactGA from 'react-ga';

import rootReducer from './rootReducer';
import { routes } from './routes';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/authActions';
import './sass/main.scss';

import rootSaga from './sagas/index';
const sagaMiddleware = createSagaMiddleware();

const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, promise, logger, sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(rootSaga);

/* store.subscribe(() => {
  console.log('Store changed', store.getState());
});*/


if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

//Google Analytics
ReactGA.initialize('UA-92549843-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={logPageView} />
  </Provider>,
  document.getElementById('root')
);
