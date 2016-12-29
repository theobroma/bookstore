import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Book extends Component {

    render() {
        const {id,title,genre,author,thumbnail,description} = this.props.item;
        return (
            <div className="card">
                <p><Link to={`/books/${id}`}>{title}</Link></p>
                <p><Link to={`/author/${author}`}>{author}</Link></p>
                <p><img src={`/images/${thumbnail}`} alt=""/></p>
                <p><Link to={`/genre/${genre}`}>{genre}</Link></p>
            </div>

        );
    }
}
