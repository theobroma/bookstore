import React, { Component } from 'react';
import { Link } from 'react-router';
import AuthorSingle from './AuthorSingle';
import $ from 'jquery';
import _ from 'lodash';
import api from './api';


export default class AuthorPage extends Component {


    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        api.listBooks().then(result=> {
            let author = this.props.params.author;
            let res =_.filter(result.data, { 'author': author });
            this.setState({items:res});
        });
    }

    render() {
        return (
            <div>
                <div className="contributor-info">
                   <h1 className = "contributor-title">{this.props.params.author}</h1>
                </div>
                <div className="coninious-list">
                    {this.state.items.map((item,index)=>{
                            return (<AuthorSingle key = {index} item = {item} /> )
                        }
                    )}
                </div>
            </div>
        );
    }
}
