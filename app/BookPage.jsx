import React, { Component } from 'react';
import { Link } from 'react-router';
import BookSingle from './BookSingle';
import $ from 'jquery';
import _ from 'lodash';

export default class BookPage extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        $.getJSON(`http://localhost:8080/api/books`)
            .then(result=> {
                let id = this.props.params.book;
                let res =_.filter(result, { '_id': id });
                this.setState({items:res});
            });
    }

    render() {
        return (
            <div className="container">
                <p>BookPage</p>
                 {this.state.items.map((item,index)=>{
                        return (<BookSingle key = {index} item = {item} /> )
                    }
                )}
            </div>
        );
    }
}
