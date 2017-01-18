import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import Layout from './Layout';
import api from './api';

import { fetchProducts } from './actions/productsActions';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const productsList = this.props.products.map( (item) =>
            <Book key = {item._id} item = {item} />
        );

        return (
            <div>
                <div className="text-left book-list">
                    {productsList}
                </div>
                    {<pre>{JSON.stringify(this.state,"", 4)}</pre>}
                    <p>this.props</p>
                    {<pre>{JSON.stringify(this.props.products,"", 4)}</pre>}
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps,{fetchProducts})(App);