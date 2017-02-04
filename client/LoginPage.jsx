import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import LoginForm from './LoginForm';

export default class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                <LoginForm/>
            </div>
        );
    }
}
