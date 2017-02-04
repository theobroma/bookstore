import React, { Component } from 'react';
import AuthorListItem from './AuthorListItem';
import api from './api';

export default class AuthorList extends Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        api.listAuthors().then(res=> {
            this.setState({items:res.data});
        });
    }

    render() {
        return (
            <div className="container">
                {this.state.items.map((item,index)=>{
                        return (<AuthorListItem key = {index} item = {item} /> )
                    }
                )}
                <pre>{JSON.stringify(this.state,"", 4)}</pre>
            </div>
        );
    }
}
