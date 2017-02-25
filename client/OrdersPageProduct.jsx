import React, { Component } from 'react';
import { Link } from 'react-router';

export default class OrdersPageProduct  extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { productId, title, thumbnail, price, quantity } = this.props.item;
    return (
      <div className="column is-12 dashed-bottom">
        <div className="columns">
          <div className="column is-3">
            <Link to={`/books/${productId}`}>
              <img className="order-thumbnail" src={`/images/${thumbnail}`} alt="" />
            </Link>
          </div>
          <div className="column is-9">
            <div className="columns">
              <div className="column">
                <Link className="order-title" to={`/books/${productId}`}>{title}</Link>
              </div>
            </div>
            <div className="columns">
                <div className="column">
                  {price}
                </div>
                <div className="column">
                  {quantity} шт.
                </div>
                <div className="column">
                  {price*quantity}
                </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
