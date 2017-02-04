import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from './actions/flashMessages';
import InitializeFromStateForm from './UserProfileForm';
import { submitForm } from './reducers/profile';

class UserProfilePage extends Component {
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
      <div className="container">
        <div className= "columns" >
          <div className= "column is-6 is-offset-3">
            <h4 className="subtitle">Настройки профиля</h4>
            <InitializeFromStateForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { submitForm, addFlashMessage })(UserProfilePage);
