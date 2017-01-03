import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LoginPage extends Component {
    render() {
        return (
            <div className="card">
                <p>LoginPage</p>
                <p className="control has-icon">
                  <input className="input" type="email" placeholder="Email"/>
                  <i className="fa fa-envelope"></i>
                </p>
                <p className="control has-icon">
                  <input className="input" type="password" placeholder="Password"/>
                  <i className="fa fa-lock"></i>
                </p>
                <p className="control">
                  <button className="button is-success">
                    Login
                  </button>
                </p>
            </div>
        );
    }
}