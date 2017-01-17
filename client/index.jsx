import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import rootReducer from './rootReducer';
import { routes } from './routes';
import './index.scss';

const logger = createLogger();


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, promise, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
    <Provider store = {store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
)