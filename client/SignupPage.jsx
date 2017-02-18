import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { userSignupRequest } from './actions/signupActions';
import { addFlashMessage } from './actions/flashMessages';
import SignupForm from './SignupForm';
import Hero from './common/hero';

class SignupPage extends Component {
  render() {
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
      <div>
        <Hero>Регистрация</Hero>
        <section className="section">
          <div className="container">
            <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} />
          </div>
        </section>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};


export default connect(state => ({}), { userSignupRequest, addFlashMessage })(SignupPage);
