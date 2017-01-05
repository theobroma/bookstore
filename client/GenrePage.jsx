import React, { Component } from 'react';
import GenreSingle from './GenreSingle';
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
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p>Книги жанра : {this.props.params.genre}</p>
                                {this.state.items.map((item,index)=>{
                                    return (<GenreSingle key = {index} item = {item} /> )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
