import React from 'react';
import { connect } from 'react-redux';
import _chunk from 'lodash/chunk';
import OrdersPageItem from './OrdersPageItem';

import { fetchOrders, deleteOrders } from './actions/profileActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.deleteAll = this.deleteAll.bind(this);
  }


  componentDidMount() {
    this.props.fetchOrders();
  }

  deleteAll() {
    this.props.deleteOrders();
  }

  render() {
    const ordersList = this.props.orders.map(item =>
      <OrdersPageItem key={item._id} item={item} />
    );

    const emptyOrders = (<div>Заказы не найдены</div>);
    const fullOrders = (
      <div>
        <div className="columns">
          <div className="column">
            <h1 className="title">Мои заказы</h1>
          </div>
          <div className="column">
            <button className="button is-warning is-outlined" onClick= {this.deleteAll}>
              <span className="icon">
                <i className="fa fa-exclamation-triangle" />
              </span>
              <span>Удалить заказы</span>
            </button>
          </div>
        </div>
        <div className="columns is-multiline">
          {ordersList}
        </div>
      </div>
    );
    return (
      <div className="container">
          { this.props.orders.length===0 ? emptyOrders : fullOrders }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}

export default connect(mapStateToProps, { fetchOrders, deleteOrders })(App);
