import React, { Component } from 'react';
import GenreListItem from './GenreListItem';
import $ from 'jquery';
import _ from 'lodash';
import api from './api';


export default class GenreList extends Component {


    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        api.listBooks().then(result=> {
            let res=[];
            _.forEach(result.data, function(item) {
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
                <ul className="genres-list">
                    {this.state.items.map((item,index)=>{
                            return (<GenreListItem key = {index} item = {item} /> )
                        }
                    )}
                </ul>
            </div>
        );
    }
}