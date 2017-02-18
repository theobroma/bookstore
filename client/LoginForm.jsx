import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import TextFieldGroup from './common/TextFieldGroup';
import validateInput from '../server/shared/validations/login';
import { login } from './actions/authActions';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        res => this.context.router.push('/'),
        err => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state;
    return (
      <div>
        <div className="columns" >
          <div className="column is-6 is-offset-3">
            <form onSubmit={this.onSubmit}>

              { errors.form && <div className="notification is-danger">{errors.form}</div> }

              <TextFieldGroup
                field="identifier"
                label="Username / Email"
                value={identifier}
                error={errors.identifier}
                onChange={this.onChange}
                icon="fa-envelope"
              />
              <TextFieldGroup
                field="password"
                label="Password"
                value={password}
                error={errors.password}
                onChange={this.onChange}
                type="password"
                icon="fa-lock"
              />
              <p className="control">
                <button className={classnames('button', 'is-success')} disabled={isLoading}>
                  Войти
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default connect(null, { login })(LoginForm);
