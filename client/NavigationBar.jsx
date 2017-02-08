import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from './actions/authActions';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <div className="nav-right nav-menu is-active">
        <Link className="nav-item is-tab" to={'/cart'}>
          <span className="icon">
            <i className="fa fa-shopping-cart" />
          </span>
          <span>Корзина</span>
        </Link>
        <Link className="nav-item is-tab" to={'/profile'}>
          <span className="icon">
            <i className="fa fa-android" />
          </span>
          <span>Профиль</span>
        </Link>
        <Link className="nav-item is-tab" to={'/avatar'}>
          <span className="icon">
            <i className="fa fa-universal-access" />
          </span>
          <span>Аватар</span>
        </Link>
        <a href="/" className="nav-item is-tab" onClick={this.logout}>
          <span className="icon">
            <i className="fa fa-sign-out" />
          </span>
          <span>Logout</span>
        </a>
      </div>
    );

    const guestLinks = (
      <div className="nav-right nav-menu is-active">
        <Link className="nav-item is-tab" to={'/signup'}>Signup</Link>
        <Link className="nav-item is-tab" to={'/login'}>
          <span className="icon">
            <i className="fa fa-sign-in" />
          </span>
          <span>Login</span>
        </Link>
      </div>
    );

    return (
      <nav className="nav">
        <div className="container">
          <div className="nav-left nav-menu ">
            <Link className="nav-item is-tab" to={'/'}>Главная</Link>
            <Link className="nav-item is-tab" to={'/books'}>Книги</Link>
            <Link className="nav-item is-tab" to={'/authors'}>Авторы</Link>
            <Link className="nav-item is-tab" to={'/genres'}>Жанры</Link>
          </div>
          <span className="nav-toggle is-active">
            <span />
            <span />
            <span />
          </span>
          { isAuthenticated ? userLinks : guestLinks }
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
