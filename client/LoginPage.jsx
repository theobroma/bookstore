import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import LoginForm from './LoginForm';
import Hero from './common/hero';

export default class LoginPage extends Component {
  render() {
    return (
      <section>
        <Hero>Вход</Hero>
        <section className="section">
          <div className="container">
            <LoginForm />
          </div>
        </section>
      </section>
    );
  }
}
