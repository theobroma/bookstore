import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

export default class ShoppingCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity : ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {_id, title, genre, author, thumbnail, description, price} = this.props.item;
    return (
      <div className="cartItem">
        <img  className="cartItem-thumbnail" src={`/images/${thumbnail}`} alt=""/>
        <Link className="cartItem-title" to={`/books/${_id}`}>{title}</Link>
        <div className="count">
          <button className="fa fa-minus-square-o"></button>
          <input
            className={classnames('input')}
            type="text"
            name="quantity"
            value={this.state.quantity}
            onChange={this.onChange}
          />
          <button className="fa fa-plus-square-o"></button>
        </div>
        <span className="cartItem-price">${price}</span>
      </div>
    );
  }
}
