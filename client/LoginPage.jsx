import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <form action="/login" method="post">
                    <p className="control has-icon">
                        <input className="input" type="email" placeholder="Email"/>
                        <span className="icon is-small">
                            <i className="fa fa-envelope"></i>
                        </span>
                    </p>
                   <p className="control has-icon">
                       <input className="input" type="password" placeholder="Password"/>
                       <span className="icon is-small">
                            <i className="fa fa-lock"></i>
                       </span>
                   </p>
                   <p className="control">
                        <button className="button is-success">
                            Login
                        </button>
                   </p>
                </form>
            </div>
        );
    }
}