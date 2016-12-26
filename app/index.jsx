import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Book from './Book';
import Genre from './Genre';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
        </Route>
        <Route path='genre' component={Genre} />
        {/* для всех остальных роутов: показывай NotFound */}
    </Router>,
    document.getElementById('root')
)