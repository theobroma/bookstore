import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import _ from 'lodash';

export default class Books extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [] };
    }


    componentDidMount() {
        $.getJSON(`http://localhost:8080/api/books`)
            .then(result=> {

                this.setState({items:result});
            });
    }

    render() {
        const id = JSON.stringify(this.state.items[0]);
        return (
            <div className="card">
            <p>BooksPage</p>
            <pre>{id}</pre>
            </div>
        );
    }
}
