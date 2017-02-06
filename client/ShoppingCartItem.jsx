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
    this.handleChangeChk = this.handleChangeChk.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChangeChk() {
    this.setState({ chkbox: !this.state.chkbox });
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
      <div className={classnames('cart-item', { active: this.state.chkbox })}>
        <div className="columns">
          <div className="column is-12-mobile is-7-desktop cart-item__section">
            <div className="checkBox">
              <input type="checkbox" checked={this.state.chkbox} onChange={this.handleChangeChk} />
            </div>
            <div className="thumbnail">
              <img className="cartItem-thumbnail" src={`/images/${thumbnail}`} alt="" />
            </div>
            <div className="link">
              <Link className="cartItem-title" to={`/books/${productId}`}>{title}</Link>
            </div>
            <div className="price">
              <span className="cartItem-price">Цена:${price}</span>
            </div>
          </div>
          <div className="column 12-mobile is5-desktop cart-item__section">
            <div className="stepperInput">
              <button className="button button--addOnLeft" onClick={this.decrement} >-</button>
              <input
                className="input stepperInput__input"
                type="text"
                name="quantity"
                value={quantity}
                onChange={this.onChange}
              />
              <button className="button button--addOnRight" onClick={this.increment} >+</button>
            </div>

            {/* <div>productId : {this.props.item.productId}</div>*/}
            <div className="button-wrap">
              <button className="button is-danger is-outlined" onClick={this.deleteItem}>
                <span>Delete</span>
                <span className="icon is-small">
                  <i className="fa fa-times" />
                </span>
              </button>
            </div>
            {/* <pre>{JSON.stringify(this.state, "", 4)}</pre>*/}
          </div>
        </div>
      </div>
    );
  }
}
