import React, { Component } from 'react';
import shortid from 'shortid';
import AuthorListItem from './AuthorListItem';
import api from './api';

export default class AuthorList extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    api.listAuthors().then((res) => {
      this.setState({ items: res.data });
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.items.map(item => (<AuthorListItem key={shortid.generate()} item={item} />)
                )}
        <pre>{JSON.stringify(this.state, '', 4)}</pre>
      </div>
    );
  }
}
