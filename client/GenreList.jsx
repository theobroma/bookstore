import React, { Component } from 'react';
import shortid from 'shortid';
import GenreListItem from './GenreListItem';
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
      <div className="container">
        <ul className="genres-list">
          {this.state.items.map(item => (<GenreListItem key={shortid.generate()} item={item} />)
                    )}
        </ul>
      </div>
    );
  }
}
