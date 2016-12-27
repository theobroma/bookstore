import React, { Component } from 'react';

export default class Genre extends Component {
    render() {
        return (
            <div>
                <p>Hello from Genre</p>
                <p>{this.props.params.genre}</p>

                <div className="columns">
                    <div className="column">column</div>
                </div>
            </div>

        );
    }
}
