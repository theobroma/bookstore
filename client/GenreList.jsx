import React, { Component } from 'react';
import shortid from 'shortid';
import GenreListItem from './GenreListItem';
import Hero from './common/hero';
import api from './api';


export default class GenreList extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    api.listGenres().then((result) => {
      this.setState({ items: result.data });
    });
  }

  render() {
    return (
      <div>
        <Hero>Жанры</Hero>
        <section className="section">
          <div className="container">
            <ul>
              {this.state.items.map(item => (<GenreListItem key={shortid.generate()} item={item} />))}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
