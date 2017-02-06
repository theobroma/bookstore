import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import TextFieldGroup from './common/TextFieldGroup';
import { fetchProfile } from './actions/profileActions';

class UserProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, firstname, lastname, isLoading } = this.state;
    return (
      <div>
        <div className="columns" >
          <div className="column is-6 is-offset-3">
            <h4 className="subtitle">Настройки профиля</h4>
            <form onSubmit={this.onSubmit}>

              { errors.form && <div className="notification is-danger">{errors.form}</div> }

              <TextFieldGroup
                field="firstname"
                label="Имя"
                value={firstname}
                error={errors.firstname}
                onChange={this.onChange}
              />
              <TextFieldGroup
                field="lastname"
                label="Фамилия"
                value={lastname}
                error={errors.lastname}
                onChange={this.onChange}
                type="text"
              />
              <p className="control">
                <button className={classnames('button', 'is-success')} disabled={isLoading}>
                Сохранить изменения
              </button>
              </p>
            </form>
            {<pre>{JSON.stringify(this.state, '', 4)}</pre>}
            {<pre>{JSON.stringify(this.props.profile, '', 4)}</pre>}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps, { fetchProfile })(UserProfileForm);
