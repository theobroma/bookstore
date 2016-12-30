import React, { Component } from 'react';
import GenreListItem from './GenreListItem';
import $ from 'jquery';
import _ from 'lodash';

export default class GenreList extends Component {


    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        $.getJSON(`http://localhost:8080/api/books`)
            .then(result=> {
                let res=[];
                _.forEach(result, function(item) {
                    let obj = _.pick(item, ['genre']);
                    res.push(obj);
                });
                res = _.uniqBy(res, 'genre');
                this.setState({items:res});
            });
    }


    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        {this.state.items.map((item,index)=>{
                                return (<GenreListItem key = {index} item = {item} /> )
                            }
                        )}
                    </div>
                </div>
            </div>

        );
    }
}