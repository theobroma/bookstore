import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import { fetchProfile } from './actions/profileActions';

class InitializeFromStateForm extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="column">
        <form onSubmit={handleSubmit}>
          <label className="label">First Name</label>
          <p className="control">
            <Field name="firstname" component="input" type="text" placeholder="First Name" className={classnames('input')} />
          </p>
          <label className="label">Last Name</label>
          <p className="control">
            <Field name="lastname" component="input" type="text" placeholder="Last Name" className={classnames('input')} />
          </p>
          <button
            type="submit"
            disabled={pristine || submitting}
            className={classnames('button', 'is-success')}
          >Submit
          </button>
        {/*<pre>{JSON.stringify(this.props, '', 4)}</pre>*/}
        </form>
      </div>
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
