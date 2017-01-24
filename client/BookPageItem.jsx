import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BookPageItem extends Component {
  render() {
    const {id,title,genre,author,thumbnail,description} = this.props.item;
    return (
      <div className="book-single-item">
        <div className="book-single-info">
          <img src={`/images/${thumbnail}`} alt=""/>
          <span className="book-single-title">{title}</span>
          <Link className="book-author"to={`/authors/${author.name}`}>{author.name}</Link>
          <Link to={`/genres/${genre}`}>{genre}</Link>
        </div>
        <div className="book-single-description">
          <div className="description-title">Описание</div>
          {description}
        </div>
      </div>
    );
  }
}
