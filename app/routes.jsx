import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';
{/* Components for routes */}
import App from './App';
import Book from './Book';
import Genre from './Genre';
import NotFound from './NotFound';

export const routes = (
    <div>
        <Route path='/' component={App}></Route>
            <Route path='/genre' component={Genre} >
                <Route path='/genre/:genre' component={Genre} ></Route>
            </Route>
        {/* для всех остальных роутов: показывай NotFound */}
        <Route path='*' component={NotFound} />
    </div>
)