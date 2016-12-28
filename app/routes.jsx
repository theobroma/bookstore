import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';
{/* Components for routes */}
import App from './App';
import Book from './Book';
import Books from './Books';
import BookPage from './BookPage';
import Genre from './Genre';
import Author from './Author';
import NotFound from './NotFound';

export const routes = (
    <div>
        <Route path='/' component={App}></Route>
            <Route path='/books' component={BookPage}>
                <Route path='/books/:book' component={BookPage}></Route>
            </Route>
            <Route path='/genre' component={Genre} >
                <Route path='/genre/:genre' component={Genre} ></Route>
            </Route>
            <Route path='/author' component={Author} >
                <Route path='/author/:author' component={Author} ></Route>
            </Route>
        {/* для всех остальных роутов: показывай NotFound */}
        <Route path='*' component={NotFound} />
    </div>
)