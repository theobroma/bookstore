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
        api.listBooks().then(result=> {
            let id = this.props.params.book;
            let res =_.filter(result.data, { '_id': id });
            this.setState({items:res});
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
