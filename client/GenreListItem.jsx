import React, { Component } from 'react';
import { Link } from 'react-router';

export default class GenreListItem extends Component {

    render() {
        const {genre} = this.props.item;
        return (
            <div className="card">
                <p>Hello from GenreListItem</p>
                <p><Link to={`/genre/${genre}`}>{genre}</Link></p>
            </div>
        );
    }
}
