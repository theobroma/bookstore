import React from 'react';
import { connect } from 'react-redux';
import _chunk from 'lodash/chunk';
import Book from './Book';

import { fetchProducts } from './actions/productsActions';
import { onAddToCart } from './actions/shoppingCartActions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const productsList = this.props.products.map(item =>
      <Book key={item._id} item={item} onAddToCart={this.props.onAddToCart} />
    );
    return (
      <div className="container">
        <div className="columns is-multiline">
          {productsList}
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
    products: state.products
  };
}

export default connect(mapStateToProps, { fetchProducts, onAddToCart })(App);
