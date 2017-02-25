import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

import { fetchProducts, loadProducts } from './actions/productsActions';
import { onAddToCart, loadCart } from './actions/shoppingCartActions';

class App extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
    this.props.loadCart();
  }

  render() {
    const productsList = this.props.products.data.map(item =>
      <Book key={item._id} item={item} onAddToCart={this.props.onAddToCart} />
    );
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {productsList}
            {/* <p>this.state</p>
            {<pre>{JSON.stringify(this.state, "", 4)}</pre>}
            <p>this.props</p>
            {<pre>{JSON.stringify(this.props.products, "", 4)}</pre>}*/}
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps, { fetchProducts, loadProducts, onAddToCart, loadCart })(App);
