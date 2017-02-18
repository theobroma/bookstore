import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BookPageItem extends Component {
  render() {
    const { id, title, genre, author, thumbnail, description } = this.props.item;
    return (
      <div>
      <div className="columns">
        <div className="column">
          <img src={`/images/${thumbnail}`} alt="" />
        </div>
        <div className="column">
          <span className="book-single-title">{title}</span>
          <Link className="book-single-author"to={`/authors/${author.name}`}>{author.name}</Link>
          <Link to={`/genres/${genre}`}>{genre}</Link>
        </div>
      </div>
      <div className="columns center-xs">
        <div className="book-description">Описание</div>
      </div>
      <div className="columns">
        {description}
      </div>
      </div>
    );
  }
}
