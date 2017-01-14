import React, { Component } from 'react';
import GenreListItem from './GenreListItem';
import api from './api';


export default class GenreList extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        api.listGenres().then(result=> {
            this.setState({items:result.data});
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