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
            <div className="columns" >
              <div className="column is-6 is-offset-3">
                <article className="message is-info">
                  <div className="message-header">
                    <p>Info</p>
                  </div>
                  <div className="message-body">
                    <Link to={'/signup'}>Зарегистрируйтесь</Link> или используйте:
                    <ul>
                      <li>Имя : admin@example.com</li>
                      <li>Пароль : 111</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
