import React from 'react';
import { connect } from 'react-redux';
import _chunk from 'lodash/chunk';
import shortid from 'shortid';
import Book from './Book';

import { fetchProducts } from './actions/productsActions';
import { onAddToCart } from './actions/shoppingCartActions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {

    const rows = _chunk(this.props.products, 4)

    const productsList = rows.map((row) => (
      <div className="columnss" key={shortid.generate()}>
      {
       row.map((item) => (
         <Book key={item._id} item={item} onAddToCart={this.props.onAddToCart} />
       ))
      }
      </div>
    ))

    return (
      <div className="container">
        {productsList}
        {/*<p>this.state</p>
          {<pre>{JSON.stringify(this.state, "", 4)}</pre>}
          <p>this.props</p>
          {<pre>{JSON.stringify(this.props.products, "", 4)}</pre>}*/}
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
