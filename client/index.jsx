import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import rootReducer from './rootReducer';
import { routes } from './routes';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/authActions';
/*import './vendor.scss';
import './index.scss';*/
import './sass/main.scss';

const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, promise, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

/*store.subscribe(() => {
  console.log('Store changed', store.getState());
});*/


if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
