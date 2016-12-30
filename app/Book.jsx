import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Book extends Component {

    render() {
        const {id,title,genre,author,thumbnail,description} = this.props.item;
        return (
            <div className="book-item">
                <img src={`/images/${thumbnail}`} alt=""/>
                <Link className="book-title" to={`/books/${id}`}>{title}</Link>
                <Link className="book-author" to={`/author/${author}`}>{author}</Link>
                <Link to={`/genre/${genre}`}>{genre}</Link>
            </div>
        );
    }
}
