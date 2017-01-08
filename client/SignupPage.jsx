import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SignupPage extends Component {
    render() {
        return (
            <div className="form">
                <form action="/signup" method="post">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password"/>
                    </div>

                    <button type="submit" className="btn btn-warning btn-lg">Signup</button>
                </form>
            </div>
        );
    }
}