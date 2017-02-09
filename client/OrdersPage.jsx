import React from 'react';
import { connect } from 'react-redux';
import _chunk from 'lodash/chunk';
import OrdersPageItem from './OrdersPageItem';

import { fetchOrders } from './actions/profileActions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const ordersList = this.props.orders.map(item =>
      <OrdersPageItem key={item._id} item={item} />
    );
    return (
      <div className="container">
        <h1 className="title">Мои заказы</h1>
        <div className="columns is-multiline">
          {ordersList}
          {/* <p>this.state</p>
          {<pre>{JSON.stringify(this.state, "", 4)}</pre>}
          <p>this.props</p>
          {<pre>{JSON.stringify(this.props.products, "", 4)}</pre>}*/}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}

export default connect(mapStateToProps, { fetchOrders })(App);
