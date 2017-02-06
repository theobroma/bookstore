import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchProfile } from './actions/profileActions';
import classnames from 'classnames';

class InitializeFromStateForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProfile();
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <Field name="firstname" component="input" type="text" placeholder="First Name" className={classnames('input')} />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field name="lastname" component="input" type="text" placeholder="Last Name" className={classnames('input')} />
          </div>
        </div>
        <div>
          <label>Username</label>
          <div>
            <Field name="username" component="input" type="text" placeholder="Username" />
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={pristine || submitting}
            className={classnames('button', 'is-success')}
          >Submit
          </button>
        </div>
        {<pre>{JSON.stringify(this.props, '', 4)}</pre>}
      </form>
    );
  }
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState'  // a unique identifier for this form
})(InitializeFromStateForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
  state => ({
    initialValues: state.profile.data // pull initial values from reducer
  }),
  { fetchProfile }
)(InitializeFromStateForm);

export default InitializeFromStateForm;
