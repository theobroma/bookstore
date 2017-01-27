import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

export default class ShoppingCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity:1,
    };
    this.onChange = this.onChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  increment(e) {
    this.setState({ quantity: this.state.quantity+1 });
  }

  decrement(e) {
    if(this.state.quantity > 1){
      this.setState({ quantity: this.state.quantity-1 });
    }
  }

  render() {
    const { _id, title, thumbnail, price } = this.props.item;
    return (
      <div className="cartItem">
        <img className="cartItem-thumbnail" src={`/images/${thumbnail}`} alt="" />
        <Link className="cartItem-title" to={`/books/${_id}`}>{title}</Link>
        <div className="count">
          <button className="fa fa-minus-square-o" onClick={this.decrement} />
          <input
            className={classnames('input')}
            type="text"
            name="quantity"
            value={this.state.quantity}
            onChange={this.onChange}
          />
          <button className="fa fa-plus-square-o" onClick={this.increment} />
        </div>
        <span className="cartItem-price">${price}</span>
      </div>
    );
  }
}
