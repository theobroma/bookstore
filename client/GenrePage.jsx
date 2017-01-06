import React, { Component } from 'react';
import GenrePageItem from './GenrePageItem';
import $ from 'jquery';
import _ from 'lodash';
import api from './api';

export default class GenrePage extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        api.listBooks().then(result=> {
            let genre = this.props.params.genre;
            let res =_.filter(result.data, { 'genre': genre });
            this.setState({items:res});
        });
    }

    render() {
        return (
            <div>
                <div className="contributor-info">
                   <h1 className = "contributor-title">Жанр : {this.props.params.genre}</h1>
                </div>
                <div className="coninious-list">
                    {this.state.items.map((item,index)=>{
                        return (<GenrePageItem key = {index} item = {item} /> )
                    })}
                </div>
            </div>
        );
    }
}
