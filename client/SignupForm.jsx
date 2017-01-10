import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import validateInput from '../shared/validations/signup';

export default class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            passwordConfirm:'',
            errors : {},
            isLoading:false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(e) {
        e.preventDefault();
        if(this.isValid()) {
            this.setState({errors: {}, isLoading:true });
            this.props.userSignupRequest(this.state).then(
                () => {
                    this.context.router.push('/');
                },
                (err) => this.setState({errors: err.response.data,isLoading:false})
            );
        }
    }

    render() {
        const {errors} = this.state
        return (
            <div>
                <div className= "columns" >
                     <div className= "column is-6 is-offset-3">
                        <h4 className="subtitle">Sign Up</h4>
                        <form action="/login" method="post" onSubmit={this.onSubmit}>
                            <p className="control has-icon">
                                <input
                                    className={classNames('input', {'is-danger': errors.username})}
                                    type="email"
                                    placeholder="Email"
                                    name = "username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <span className="icon is-small">
                                    <i className="fa fa-envelope"></i>
                                </span>
                                { errors.username && <span className="help is-danger">{errors.username}</span>}
                            </p>
                           <p className="control has-icon">
                               <input
                                    className={classNames('input', {'is-danger': errors.password})}
                                    type="password"
                                    placeholder="Password"
                                    name = "password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                               <span className="icon is-small">
                                    <i className="fa fa-lock"></i>
                               </span>
                               { errors.password && <span className="help is-danger">{errors.password}</span>}
                           </p>
                            <p className="control has-icon">
                               <input
                                    className={classNames('input', {'is-danger': errors.passwordConfirm})}
                                    type="password"
                                    placeholder="Password Confirm"
                                    name = "passwordConfirm"
                                    value={this.state.passwordConfirm}
                                    onChange={this.onChange}
                                />
                               <span className="icon is-small">
                                    <i className="fa fa-lock"></i>
                               </span>
                               { errors.passwordConfirm && <span className="help is-danger">{errors.passwordConfirm}</span>}
                           </p>

                           <p className="control">
                                <button
                                    className={classNames('button','is-success', {'is-loading': this.state.isLoading})}
                                >
                                    Login
                                </button>
                           </p>
                        </form>
                    </div>
                </div>
                <div className= "columns" >
                    <div className= "column is-6 is-offset-3">
                        {<pre>{JSON.stringify(this.state,"", 4)}</pre>}
                    </div>
                </div>
            </div>
        );
    }
}


SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}