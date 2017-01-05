import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BookSingle extends Component {

    render() {
        const {id,title,genre,author,thumbnail,description} = this.props.item;
        return (
            <div className="book-single-item">
                <img src={`/images/${thumbnail}`} alt=""/>
                <span className="book-title">{title}</span>
                <Link className="book-author"to={`/author/${author}`}>{author}</Link>
                <Link to={`/genre/${genre}`}>{genre}</Link>
                <div className="book-sinlge-description">
                    {description}
                </div>
            </div>
        );
    }
}
