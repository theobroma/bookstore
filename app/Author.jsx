import React, { Component } from 'react';

export default class Author extends Component {

    render() {
        return (
            <div className="card">
                <p>Hello from Genre</p>
                <p>{this.props.params.author}</p>
                <p>Author component</p>
            </div>
        );
    }
}
