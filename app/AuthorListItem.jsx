import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AuthorListItem extends Component {

    render() {
        const {author} = this.props.item;
        return (
            <div className="card">
                <p>Hello from AuthorListItem</p>
                <p><Link to={`/author/${author}`}>{author}</Link></p>
            </div>
        );
    }
}
