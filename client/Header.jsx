import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

    render() {
        return (
            <div className = "header">
                <nav className="nav">
                    <div className="container">
                        <div className="nav-right nav-menu">
                            <Link className="nav-item" to={`/`}>Главная</Link>
                            <Link className="nav-item" to={`/books`}>Книги</Link>
                            <Link className="nav-item" to={`/author`}>Авторы</Link>
                            <Link className="nav-item" to={`/genre`}>Жанры</Link>
                            <Link className="nav-item" to={`/login`}>Логин</Link>
                             <span className="nav-item">
                                  <a className="button" >
                                    <span className="icon">
                                      <i className="fa fa-shopping-cart"></i>
                                    </span>
                                    <span>Shoping Cart</span>
                                  </a>
                                  <a className="button is-primary" href="#">
                                    <span className="icon">
                                      <i className="fa fa-user"></i>
                                    </span>
                                    <span>User Menagment</span>
                                    <span className="icon">
                                      <i className="fa fa-sort-down"></i>
                                    </span>
                                  </a>
                                </span>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
