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

/*    const productsList = this.props.products.map((item, index) => {
      return <Book key={item._id} item={item} index={index} onAddToCart={this.props.onAddToCart} />
    }
    );*/
    const rows = _chunk(this.props.products, 4)

    const productsList = rows.map((row) => (
      <div className="columns is-mobile">
      {
       row.map((item, index) => (
         <Book key={item._id} item={item} index={index} onAddToCart={this.props.onAddToCart} />
       ))
      }
      </div>
    ))

    return (
      <div className="container">
        <div>
          {productsList}
        </div>
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
