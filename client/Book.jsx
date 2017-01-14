import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Book extends Component {

    render() {
        const {_id,title,genre,author,thumbnail,description,price} = this.props.item;
        return (
            <div className="book-item">
                <img src={`/images/${thumbnail}`} alt=""/>
                <Link className="book-title" to={`/books/${_id}`}>{title}</Link>
                <Link className="book-author" to={`/authors/${author.name}`}>{author.name}</Link>
                <Link to={`/genres/${genre}`}>{genre}</Link>
                <span className="book-price">${price}</span>
            </div>
        );
    }
}
