import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import BookPageItem from './BookPageItem';
import api from './api';
import { loadProducts } from './actions/productsActions';

class BookPage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    const bookID = this.props.params.book;
    const book = this.props.products.filter(item => item._id === bookID);
    this.setState({ items: book });
  }

  render() {
    return (
      <section>
        <section className="section">
          <div className="container">
            {this.state.items.map(item => (<BookPageItem key={shortid.generate()} item={item} />))}
          </div>
        </section>
      </section>
    );
  }
}


function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps, { loadProducts })(BookPage);
