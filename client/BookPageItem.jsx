import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BookPageItem extends Component {
  render() {
    const { id, title, genre, author, thumbnail, description } = this.props.item;
    return (
      <div>
      <div className="columns">
        <div className="column is-3">
          <img src={`/images/${thumbnail}`} alt="" />
        </div>
        <div className="column is-9">
          <span className="book-single-title">{title}</span>
          <div className="bookDescrTable">
            <div className="columns is-mobile">
              <div className="column is-3">
                <div className="leftTD">
                  <div className="text">Автор</div>
                  <div className="bottedLine"></div>
                </div>
              </div>
              <div className="column">
                <Link className="book-single-author"to={`/authors/${author.name}`}>{author.name}</Link>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-3">
                <div className="leftTD">
                  <div className="text">Жанр</div>
                  <div className="bottedLine"></div>
                </div>
              </div>
              <div className="column">
                <Link to={`/genres/${genre}`}>{genre}</Link>
              </div>
            </div>
          </div>
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
