import React from 'react';
import { connect } from 'react-redux';
import { fetchCart, onItemDelete, onIncrement , onDecrement } from './actions/shoppingCartActions';
import ShoppingCartItem from './ShoppingCartItem';
import Book from './Book';

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);
    this.getTotal = this.getTotal.bind(this);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  getTotal () {
     return this.props.shoppingCart.reduce( (total, elem) =>
      total + elem.price *elem.quantity,
      0).toFixed(2)
  }

  render() {
    const cartList = this.props.shoppingCart.map( (item) =>
      <ShoppingCartItem
        key={item._id}
        item={item}
        onItemDelete={this.props.onItemDelete}
        onIncrement={this.props.onIncrement}
        onDecrement={this.props.onDecrement}
      />
    );
    return (
      <div>
        <div className="cartItemList">
          {cartList}
        </div>
        <div className="cartFooter">
          <h4>Итоговая сумма </h4>
          <div className="cartTotal">
            {this.getTotal()}
          </div>
        </div>
          <pre>{JSON.stringify(this.props.shoppingCart, "", 4)}</pre>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingCart: state.shoppingCart
  }
}

export default connect(mapStateToProps, { fetchCart, onItemDelete, onIncrement , onDecrement})(ShoppingCartPage);
