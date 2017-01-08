import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';
{/* Components for routes */}
import Layout from './Layout';
import App from './App';
import Book from './Book';
import BookPage from './BookPage';
import GenrePage from './GenrePage';
import GenreList from './GenreList';
import AuthorPage from './AuthorPage';
import AuthorList from './AuthorList';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import NotFound from './NotFound';

export const routes = (
    <div>
        <Route path='/' component={Layout}>
            <Route path='/books' component={App}></Route>
            <Route path='/books/:book' component={BookPage}></Route>
            <Route path='/genre' component={GenreList} ></Route>
            <Route path='/genre/:genre' component={GenrePage} ></Route>
            <Route path='/author' component={AuthorList} ></Route>
            <Route path='/author/:author' component={AuthorPage} ></Route>
            <Route path='/signup' component={SignupPage} ></Route>
            <Route path='/login' component={LoginPage} ></Route>
            <Route path='/profile' component={ProfilePage} ></Route>
        </Route>
        {/* для всех остальных роутов: показывай NotFound */}
        <Route path='*' component={NotFound} />
    </div>
)