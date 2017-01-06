import React, { Component } from 'react';
import { Link } from 'react-router';

export default class GenreListItem extends Component {

    render() {
        const {genre} = this.props.item;
        return (
            <li className="genre-item">
                <Link to={`/genre/${genre}`}>{genre}</Link>
            </li>
        );
    }
}
