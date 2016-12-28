import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

    render() {
        return (
            <div className="card">
                <p><Link to={`/`}>Книги</Link></p>
                <p><Link to={`/author`}>Авторы</Link></p>
                <p><Link to={`/genre`}>Жанры</Link></p>
            </div>

        );
    }
}
