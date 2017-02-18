import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from './actions/flashMessages';
import InitializeFromStateForm from './UserProfileForm';
import { submitForm } from './reducers/profile';
import Hero from './common/hero';

class UserProfilePage extends Component {
  handleSubmit = (values) => {
    this.props.submitForm(values).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'Изменения сохранены'
        });
      },
      (err) => {
        this.props.addFlashMessage({
          type: 'error',
          text: 'Ошибка сохранения'
        });
      }
    );
  }

  render() {
    return (
      <section>
        <Hero>Настройки профиля</Hero>
        <section className="section">
          <div className="container">
            <div className="columns" >
              <div className="column is-half is-offset-3">
                <InitializeFromStateForm onSubmit={this.handleSubmit} />
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default connect(null, { submitForm, addFlashMessage })(UserProfilePage);
