import React, { Component } from 'react';
import shortid from 'shortid';
import GenrePageItem from './GenrePageItem';
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
      <div className="container">
        <div className="contributor-info">
          <h1 className="contributor-title">Жанр : {this.props.params.genre}</h1>
        </div>
        <div className="continious-list">
          {this.state.items.map(item => (<GenrePageItem key={shortid.generate()} item={item} />))}
        </div>
      </div>
    );
  }
}
