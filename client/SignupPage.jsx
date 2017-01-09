import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { userSignupRequest } from './actions/signupActions';
import SignupForm from './SignupForm';


class SignupPage extends Component {

    render() {
        const {userSignupRequest} = this.props;
        return (
            <div>
                <SignupForm userSignupRequest = {userSignupRequest}/>
            </div>
        );
    }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}


export default connect( (state) => {return {} }, {userSignupRequest})(SignupPage);