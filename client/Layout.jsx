import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import FlashMessagesList from './flash/FlashMessagesList';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="site-content">
          <section className="section">
            <FlashMessagesList />
            {this.props.children}
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
