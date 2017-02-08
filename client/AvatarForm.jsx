import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { fetchAvatar } from './actions/profileActions';

class AvatarForm extends Component {

  componentDidMount() {
    this.props.fetchAvatar();
  }

  render() {
    const avatar = Buffer.from(this.props.avatar, 'base64');
    return (
      <div>
        {avatar}
        <p>121141424124123</p>
        <pre>{JSON.stringify(this.state, '', 4)}</pre>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    avatar: state.avatar
  };
}

export default connect(mapStateToProps, { fetchAvatar })(AvatarForm);
