import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AuthorSingle extends Component {

    render() {
        const {_id,title,genre,author,thumbnail,description} = this.props.item;
        return (
            <div className="card">
                <p><Link to={`/books/${_id}`}>{title}</Link></p>
            </div>
        );
    }
}
