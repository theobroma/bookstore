import React, { Component } from 'react';
import { Link } from 'react-router';

export default class GenreSingle extends Component {

    render() {
        const {id,title,genre,author,thumbnail,description} = this.props.item;
        return (
            <div className="card">
                <p><Link to={`/books/${id}`}>{title}</Link></p>
            </div>
        );
    }
}
