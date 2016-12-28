import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BookSingle extends Component {

    render() {
        const {id,title,genre,author,thumbnail,description} = this.props.item;
        return (
            <div className="card">
                <p>{title}</p>
                <p>{author}</p>
                <p><img src={`/images/${thumbnail}`} alt=""/></p>
                <p><Link to={`/genre/${genre}`}>{genre}</Link></p>
            </div>

        );
    }
}
