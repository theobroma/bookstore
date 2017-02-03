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

  handleChangeChk () {
      this.setState({ chkbox: !this.state.chkbox });
  }

  decrement (e) {
    this.props.onDecrement(this.props.item.productId);
  }

  increment (e) {
    this.props.onIncrement(this.props.item.productId);
  }
  deleteItem (e) {
    this.props.onItemDelete(this.props.item.productId);
  }

  render() {
    const { productId, title, thumbnail, price } = this.props.item;
    return (
      <div className={classnames('cartItem', 'columns', { 'active': this.state.chkbox })}>
        <div className="column is-7 columns">
          <div className="checkBox">
            <input type="checkbox" checked={this.state.chkbox} onChange={this.handleChangeChk} />
          </div>
          <div className="column">
            <img className="cartItem-thumbnail" src={`/images/${thumbnail}`} alt="" />
          </div>
          <div className="column">
            <Link className="cartItem-title" to={`/books/${productId}`}>{title}</Link>
          </div>
          <div className="column">
             <span className="cartItem-price">Цена:${price}</span>
          </div>
        </div>
        <div className="column is-5 columns">
          <div className="column count">
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

          {/*<div>productId : {this.props.item.productId}</div>*/}
          <div className="column">
            <button className="button is-danger is-outlined" onClick={this.deleteItem}>
              <span>Delete</span>
              <span className="icon is-small">
                <i className="fa fa-times" />
              </span>
            </button>
          </div>
        {/*<pre>{JSON.stringify(this.state, "", 4)}</pre>*/}
        </div>
      </div>
    );
  }
}
