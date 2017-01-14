import React, { Component } from 'react';
import { Link } from 'react-router';
import BookPageItem from './BookPageItem';
import $ from 'jquery';
import _ from 'lodash';
import api from './api';

export default class BookPage extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        let bookID = this.props.params.book;
        api.bookByID(bookID).then(result=> {
            this.setState({items:result.data});
        });
    }

    render() {
        return (
            <div>
                <p>BookPage</p>
                 {this.state.items.map((item,index)=>{
                        return (<BookPageItem key = {index} item = {item} /> )
                    }
                )}
            </div>
        );
    }
}
