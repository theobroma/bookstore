import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addFlashMessage } from './actions/flashMessages';
import InitializeFromStateForm from './UserProfileForm2';
import { submitForm } from './reducers/profile';

class UserProfilePage2 extends Component {
  handleSubmit = (values) => {
    this.props.submitForm(values).then(
      () => {
        this.props.addFlashMessage({
          type: "success",
          text : "Изменения сохранены",
        })
      },
      (err) => {
        this.props.addFlashMessage({
          type: "error",
          text : "Ошибка сохранения",
        })
      }
    );
  }

  render() {
    return (
      <div className="form">
        <p>Hello from profile page2</p>
        <InitializeFromStateForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, { submitForm, addFlashMessage })(UserProfilePage2);
