import React, { Component } from 'react';
import UserProfileForm from './UserProfileForm';

export default class ProfilePage extends Component {
  render() {
    return (
      <div className="form">
        <p>Hello from profile page</p>
        <UserProfileForm />
      </div>
    );
  }
}
