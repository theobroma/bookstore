import React, { Component } from 'react';
import shortid from 'shortid';
import AuthorListItem from './AuthorListItem';
import Hero from './common/hero';
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
      <div>
        <Hero>Авторы</Hero>
        <section className="section author-list">
          <div className="container">
            {this.state.items.map(item => (<AuthorListItem key={shortid.generate()} item={item} />))}
          </div>
        </section>
      </div>
    );
  }
}
