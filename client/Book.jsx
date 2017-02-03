import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {_id, title, genre, author, thumbnail, description, price} = this.props.item;
    this.props.onAddToCart({productId:_id, title, thumbnail, price});
    console.log("item _id",this.props.item._id);
  }

  render() {
    const {_id, title, genre, author, thumbnail, description, price} = this.props.item;
    return (
      <div className="column is-12-mobile is-6-tablet is-3-desktop has-text-centered book-item">
        <p>Index:{this.props.index}</p>
        <img src={`/images/${thumbnail}`} alt=""/>
        <Link className="book-title" to={`/books/${_id}`}>{title}</Link>
        <Link className="book-author" to={`/authors/${author.name}`}>{author.name}</Link>
        <Link to={`/genres/${genre}`}>{genre}</Link>
        <span className="book-price">${price}</span>
        <button
          onClick={this.onClick}
          className="button is-primary">Купить
        </button>
      </div>
    );
  }
}
