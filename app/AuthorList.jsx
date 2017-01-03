import React, { Component } from 'react';
import AuthorListItem from './AuthorListItem';
import $ from 'jquery';
import _ from 'lodash';

export default class AuthorList extends Component {


    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        $.getJSON(`http://localhost:8080/api/books`)
            .then(result=> {
                let res=[];
                _.forEach(result, function(item) {
                    let obj = _.pick(item, ['author']);
                    res.push(obj);
                });
                res = _.uniqBy(res, 'author');
                this.setState({items:res});
            });
    }


    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column">
                        {this.state.items.map((item,index)=>{
                                return (<AuthorListItem key = {index} item = {item} /> )
                            }
                        )}
                        <pre>{JSON.stringify(this.state,"", 4)}</pre>
                    </div>
                </div>
            </div>

        );
    }
}