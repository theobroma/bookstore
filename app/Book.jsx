import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Book extends Component {
    render() {
        return (
            <div className="card">
                <p>{this.props.item.title}</p>
                <p><Link to='/genre'>Genre</Link></p>
            </div>

        );
    }
}
