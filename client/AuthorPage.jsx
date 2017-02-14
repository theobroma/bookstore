import React, { Component } from 'react';
import shortid from 'shortid';
import AuthorPageItem from './AuthorPageItem';
import api from './api';


export default class AuthorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      author: []
    };
  }

  componentDidMount() {
    const authorName = this.props.params.author;
    api.authorByName(authorName).then((result) => {
      this.setState({ items: result.data, author: result.data[0].author });
    });
  }

  render() {
    const { name, photo } = this.state.author;
    return (
      <div>
        <div className="authorDetailHeader">
          <div className="authorBg">
          </div>
          <div className="container">
            <div className="columns contributor-info" >
              <img src={`/images/${photo}`} alt="" />
              <h1 className="contributor-title">Автор: {name}</h1>
            </div>
          </div>
        </div>
        <div className="authorDetailList">
          <div className="container">
            <div className="columns continious-list">
              {this.state.items.map(item => (<AuthorPageItem key={shortid.generate()} item={item} />))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
