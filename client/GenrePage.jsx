import React, { Component } from 'react';
import shortid from 'shortid';
import GenrePageItem from './GenrePageItem';
import Hero from './common/hero';
import api from './api';

export default class GenrePage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount() {
    const genreName = this.props.params.genre;
    api.genreByName(genreName).then((result) => {
      this.setState({ items: result.data });
    });
  }
  render() {
    return (
      <div>
        <Hero>Жанр : {this.props.params.genre}</Hero>
        <section className="section">
          <div className="container">
            <div className="continious-list">
              {this.state.items.map(item => (<GenrePageItem key={shortid.generate()} item={item} />))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
