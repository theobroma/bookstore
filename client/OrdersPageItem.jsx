import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import OrdersPageProduct from './OrdersPageProduct';

export default class OrdersPageItem  extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _id, orderId, date, list } = this.props.item;
    const goodsList = list.map(item =>
     <OrdersPageProduct key={item._id} item={item} />
    );

    return (
      <div className="column is-12 profile-order-details">
        <div className="columns">
          <div className="column is-9 profile-order-heading">
            Заказ № {orderId}
            {goodsList}
          </div>
          <div className=" column is-3 profile-order-status">
            Выполнен {moment(date).format('LLL')}
          </div>
        </div>
      </div>
    );
  }
}
