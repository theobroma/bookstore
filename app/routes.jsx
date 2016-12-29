import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';
{/* Components for routes */}
import App from './App';
import Book from './Book';
import BookPage from './BookPage';
import GenrePage from './GenrePage';
import AuthorPage from './AuthorPage';
import NotFound from './NotFound';

export const routes = (
    <div>
        <Route path='/' component={App}></Route>
            <Route path='/books' component={BookPage}>
                <Route path='/books/:book' component={BookPage}></Route>
            </Route>
            <Route path='/genre' component={GenrePage} >
                <Route path='/genre/:genre' component={GenrePage} ></Route>
            </Route>
            <Route path='/author' component={AuthorPage} >
                <Route path='/author/:author' component={AuthorPage} ></Route>
            </Route>
        {/* для всех остальных роутов: показывай NotFound */}
        <Route path='*' component={NotFound} />
    </div>
)