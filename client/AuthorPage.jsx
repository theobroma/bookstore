import React, { Component } from 'react';
import { Link } from 'react-router';
import AuthorPageItem from './AuthorPageItem';
import $ from 'jquery';
import _ from 'lodash';
import api from './api';


export default class AuthorPage extends Component {


    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        let authorName = this.props.params.author;
        api.authorByName(authorName).then(result=> {
            this.setState({items:result.data});
        });
    }

    render() {
        return (
            <div>
                <div className="contributor-info">
                   <h1 className = "contributor-title">Автор: {this.props.params.author}</h1>
                </div>
                <div className="coninious-list">
                    {this.state.items.map((item,index)=>{
                            return (<AuthorPageItem key = {index} item = {item} /> )
                        }
                    )}
                </div>
            </div>
        );
    }
}
