import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

    render() {
        return (
            <div>
                <nav className="nav">
                    <div className="container">
                        <div className="nav-left nav-menu">
                            <Link className="nav-item" to={`/books`}>Книги</Link>
                            <Link className="nav-item" to={`/author`}>Авторы</Link>
                            <Link className="nav-item" to={`/genre`}>Жанры</Link>
                             <span className="nav-item">
                                  <a className="button" >
                                    <span className="icon">
                                      <i className="fa fa-twitter"></i>
                                    </span>
                                    <span>Tweet</span>
                                  </a>
                                  <a className="button is-primary" href="#">
                                    <span className="icon">
                                      <i className="fa fa-download"></i>
                                    </span>
                                    <span>Download</span>
                                  </a>
                                </span>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
