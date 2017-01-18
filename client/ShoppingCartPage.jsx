import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';
import api from './api';


class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <div className="cartItemList">

            </div>
                {<pre>{JSON.stringify(this.props.shoppingCart,"", 4)}</pre>}
        </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    shoppingCart: state.shoppingCart
  }
}

export default connect(mapStateToProps)(ShoppingCartPage);