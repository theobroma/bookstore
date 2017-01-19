import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import TextFieldGroup from './common/TextFieldGroup';
import validateInput from '../shared/validations/login';
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

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
          this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
          this.setState({ errors: {}, isLoading: true });
          this.props.login(this.state).then(
            (res) => this.context.router.push('/'),
            (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
          );
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }



    render() {
        const { errors, identifier, password, isLoading } = this.state;
        return (
            <div>
                <div className= "columns" >
                     <div className= "column is-6 is-offset-3">
                        <h4 className="subtitle">Sign Up</h4>
                       <form onSubmit={this.onSubmit}>
                        <h1>Login</h1>
                        <TextFieldGroup
                          field="identifier"
                          label="Username / Email"
                          value={identifier}
                          error={errors.identifier}
                          onChange={this.onChange}
                        />
                        <TextFieldGroup
                          field="password"
                          label="Password"
                          value={password}
                          error={errors.password}
                          onChange={this.onChange}
                          type="password"
                        />
                        <p className="control">
                            <button className={classnames('button','is-success')} disabled={isLoading}>
                                Login
                            </button>
                       </p>
                      </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null,{login})(LoginForm);