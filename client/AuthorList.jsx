import React, { Component } from 'react';
import AuthorListItem from './AuthorListItem';
import $ from 'jquery';
import _ from 'lodash';
import api from './api';

export default class AuthorList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        api.listAuthors().then(res=> {
            this.setState({items:res.data});
        });
    }

    render() {
        return (
            <div>
                {this.state.items.map((item)=>{
                        return (<AuthorListItem key = {item._id} item = {item} /> )
                    }
                )}
                <pre>{JSON.stringify(this.state,"", 4)}</pre>
            </div>
        );
    }
}