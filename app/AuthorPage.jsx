import React, { Component } from 'react';
import { Link } from 'react-router';
import AuthorSingle from './AuthorSingle';
import $ from 'jquery';
import _ from 'lodash';


export default class AuthorPage extends Component {


    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        $.getJSON(`http://localhost:8080/api/books`)
            .then(result=> {
                let author = this.props.params.author;
                let res =_.filter(result, { 'author': author });
                this.setState({items:res});
            });
    }

    render() {
        return (
            <div className="card">
                <p>Книги автора : {this.props.params.author}</p>
                {this.state.items.map((item,index)=>{
                        return (<AuthorSingle key = {index} item = {item} /> )
                    }
                )}
            </div>
        );
    }
}
