import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

export default class ShoppingCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chkbox: false
    };
    this.onChange = this.onChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  decrement(e) {
    this.props.onDecrement(this.props.item.productId);
  }

  increment(e) {
    this.props.onIncrement(this.props.item.productId);
  }
  deleteItem(e) {
    this.props.onItemDelete(this.props.item.productId);
  }

  render() {
    const { productId, title, thumbnail, price, quantity } = this.props.item;
    return (
      <div className={classnames('cartItem', { active: this.state.chkbox })}>
        <div className="columns middle-xs center-xs">
          <div className="column is-6">
            <div className="columns middle-xs center-xs">
              <div className="column is-4">
                <img className="cartItem__thumbnail" src={`/images/${thumbnail}`} alt="" />
              </div>
              <div className="column is-4">
                <Link className="cartItem__title" to={`/books/${productId}`}>{title}</Link>
              </div>
              <div className="column is-4">
                <span className="cartItem__price">Цена:${price}</span>
              </div>
            </div>
          </div>
        <div className="column is-6">
          <div className="columns middle-xs center-xs">
            <div className="column is-6">
              <div className="stepperInput center-xs">
                <button className="stepperButton button--addOnLeft" onClick={this.decrement} >-</button>
                <input
                  className="stepperInput__input"
                  type="text"
                  name="quantity"
                  value={quantity}
                  onChange={this.onChange}
                />
                <button className="stepperButton button--addOnRight" onClick={this.increment} >+</button>
              </div>
            </div>
            <div className="column is-6 cartItem__delete">
              <button className="button is-danger is-outlined" onClick={this.deleteItem}>
                <span className="icon is-small">
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                </span>
              </button>
            </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}
