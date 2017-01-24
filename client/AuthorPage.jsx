import React, { Component } from 'react';
import AuthorPageItem from './AuthorPageItem';
import api from './api';


export default class AuthorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      author: [],
    };
  }

  componentDidMount() {
    const authorName = this.props.params.author;
    api.authorByName( authorName ).then( ( result ) => {
      this.setState({items:result.data,author : result.data[0].author});
    });
  }

  render() {
    const { name, photo } = this.state.author;
    return (
      <div>
        <div className="contributor-info" >
          <img src={`/images/${photo}`} alt=""/>
          <h1 className = "contributor-title">Автор: {name}</h1>
        </div>
        <div className="continious-list">
          {this.state.items.map( (item, index) => {
            return (<AuthorPageItem key={index} item={item} /> )
          })}
        </div>
      </div>
    );
  }
}
