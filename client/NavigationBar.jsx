import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { logout } from './actions/authActions';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.logout = this.logout.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <div className={classnames('nav-right', 'nav-menu', { 'is-active': this.state.open })} >
        <Link className="nav-item is-tab" to={'/cart'}>
          <span className="icon">
            <i className="fa fa-shopping-cart" />
          </span>
          <span>Корзина</span>
        </Link>
        <Link className="nav-item is-tab" to={'/orders'}>
          <span className="icon">
            <i className="fa fa-list-alt" />
          </span>
          <span>Заказы</span>
        </Link>
        <Link className="nav-item is-tab" to={'/profile'}>
          <span className="icon">
            <i className="fa fa-android" />
          </span>
          <span>Профиль</span>
        </Link>
        <a href="/" className="nav-item is-tab" onClick={this.logout}>
          <span className="icon">
            <i className="fa fa-sign-out" />
          </span>
          <span>Выход</span>
        </a>
      </div>
    );

    const guestLinks = (
      <div className={classnames('nav-right', 'nav-menu', { 'is-active': this.state.open })} >
        <Link className="nav-item is-tab" to={'/signup'}>Регистрация</Link>
        <Link className="nav-item is-tab" to={'/login'}>
          <span className="icon">
            <i className="fa fa-sign-in" />
          </span>
          <span>Вход</span>
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
          <span className={classnames('nav-toggle', { 'is-active': this.state.open })}  onClick = {this.handleClick} >
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
