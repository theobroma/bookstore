import React, { Component } from 'react';
import { Link } from 'react-router';

export default class GenrePageItem extends Component {

  render() {
    const { _id, title, genre, author, thumbnail, description } = this.props.item;
    return (
      <div className="continious-item">
        <img src={`/images/${thumbnail}`} alt="" />
        <Link className="book-title" to={`/books/${_id}`}>{title}</Link>
        <Link className="book-author"to={`/authors/${author.name}`}>{author.name}</Link>
      </div>
    );
  }
}
