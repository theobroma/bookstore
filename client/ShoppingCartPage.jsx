import React from 'react';
import { connect } from 'react-redux';
import { loadCart, onItemDelete, onIncrement, onDecrement, addOrder, cartDelete } from './actions/shoppingCartActions';
import ShoppingCartItem from './ShoppingCartItem';
import { addFlashMessage } from './actions/flashMessages';
import Book from './Book';
import Hero from './common/hero';

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);
    this.getTotal = this.getTotal.bind(this);
    this.checkout = this.checkout.bind(this);
  }

  componentDidMount() {
    this.props.loadCart();
  }

  getTotal() {
    return this.props.shoppingCart.data.reduce((total, elem) =>
      total + (elem.price * elem.quantity),
      0).toFixed(2);
  }
  checkout() {
    this.props.addOrder(this.props.shoppingCart.data).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Заказ принят'
          });
          this.props.cartDelete();
        },
        err => this.setState({ errors: err.response.data, isLoading: false })
      );
  }

  render() {
    const cartList = this.props.shoppingCart.data.map(item =>
      <ShoppingCartItem
        key={item._id}
        item={item}
        onItemDelete={this.props.onItemDelete}
        onIncrement={this.props.onIncrement}
        onDecrement={this.props.onDecrement}
      />
    );

    const emptyCart = (<div>У-у-упс! Корзина пуста.</div>);
    const fullCart = (
      <div className="columns is-multiline">
        <div className="cartItemList column is-12">
          {cartList}
        </div>
        <div className="cartFooter column is-12">
          <h4>Итоговая сумма </h4>
          <div className="cartTotal">
            {this.getTotal()}
          </div>
          <button className="button is-success is-outlined" onClick= {this.checkout}>
            Оформить заказ
          </button>
        </div>
        <pre>{/*JSON.stringify(this.props.shoppingCart, '', 4)*/}</pre>
      </div>
    );

    return (
      <section>
        <Hero>Корзина</Hero>
        <section className="section">
          <div className="container">
            { this.props.shoppingCart.length===0 ? emptyCart : fullCart }
          </div>
        </section>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingCart: state.shoppingCart
  };
}

export default connect(mapStateToProps, {
  loadCart, onItemDelete, onIncrement, onDecrement, addOrder, addFlashMessage, cartDelete
})(ShoppingCartPage);
