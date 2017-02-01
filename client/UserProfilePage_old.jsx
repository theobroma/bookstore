import React, { Component } from 'react';
import UserProfileForm from './UserProfileForm_old';

export default class UserProfilePage extends Component {
  render() {
    return (
      <div className="form">
        <p>Hello from profile page</p>
        <UserProfileForm />
      </div>
    );
  }
}
