import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from './actions/authActions';

class NavigationBar extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <div className="nav-right nav-menu">
        <Link className="nav-item" to={`/cart`}>Корзина</Link>
        <Link className="nav-item" to={`/profile`}>Профиль</Link>
        <a href="#" className="nav-item" onClick={this.logout.bind(this)}>Logout</a>
      </div>
    );

    const guestLinks = (
      <div className="nav-right nav-menu">
        <Link className="nav-item" to={`/signup`}>Signup</Link>
        <Link className="nav-item" to={`/login`}>Login</Link>
      </div>
    );

    return (
      <nav className="nav">
          <div className="container">
              <div className="nav-left nav-menu">
                <Link className="nav-item" to={`/`}>Главная</Link>
                <Link className="nav-item" to={`/books`}>Книги</Link>
                <Link className="nav-item" to={`/authors`}>Авторы</Link>
                <Link className="nav-item" to={`/genres`}>Жанры</Link>
              </div>
              { isAuthenticated ? userLinks : guestLinks }
          </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps,{ logout })(NavigationBar);