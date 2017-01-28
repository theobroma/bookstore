import React from 'react';
import { connect } from 'react-redux';
import { fetchCart, onItemDelete } from './actions/shoppingCartActions';
import ShoppingCartItem from './ShoppingCartItem';
import Book from './Book';

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  render() {
    const cartList = this.props.shoppingCart.map( (item) =>
      <ShoppingCartItem key={item._id} item={item} onItemDelete={this.props.onItemDelete} />
    );
    return (
      <div>
        <div className="cartItemList">
          {cartList}
        </div>
        <div className="cartFooter">
          <h4>Итоговая сумма </h4>
          <div className="cartTotal"></div>
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

export default connect(mapStateToProps, { fetchCart, onItemDelete })(ShoppingCartPage);
