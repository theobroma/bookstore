import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

import { fetchProducts } from './actions/productsActions';
import { onAddToCart } from './actions/shoppingCartActions';

class App extends React.Component {
  componentDidMount() {
    thi.props.fetchProducts();
  }

  render() {
    const productsList = this.props.products.map((item) =>
      <Book key={item._id} item={item} onAddToCart={this.props.onAddToCart} />
    );

    return (
      <div>
        <div className="text-left book-list">
          {productsList}
        </div>
          <p>this.state</p>
          {<pre>{JSON.stringify(this.state, "", 4)}</pre>}
          <p>this.props</p>
          {<pre>{JSON.stringify(this.props.products, "", 4)}</pre>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { fetchProducts, onAddToCart })(App);
