import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "username" : "",
            "password" : ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
    }

    render() {
        return (
            <div>
                <div className= "columns" >
                     <div className= "column is-6 is-offset-3">
                        <h4 className="subtitle">Sign Up</h4>
                        <form action="/login" method="post" onSubmit={this.onSubmit}>
                            <p className="control has-icon">
                                <input
                                    className="input"
                                    type="email"
                                    placeholder="Email"
                                    name = "username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <span className="icon is-small">
                                    <i className="fa fa-envelope"></i>
                                </span>
                            </p>
                           <p className="control has-icon">
                               <input
                                    className="input"
                                    type="password"
                                    placeholder="Password"
                                    name = "password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                               <span className="icon is-small">
                                    <i className="fa fa-lock"></i>
                               </span>
                           </p>
                           <p className="control">
                                <button className="button is-success" >
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