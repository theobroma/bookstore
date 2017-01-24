import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onAddToCart(this.props.item._id);
    console.log("item _id",this.props.item._id);
  }

  render() {
    const {_id,title,genre,author,thumbnail,description,price} = this.props.item;
    return (
      <div className="book-item">
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
