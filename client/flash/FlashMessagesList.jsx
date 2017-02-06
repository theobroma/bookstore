import React from 'react';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../actions/flashMessages';
import { connect } from 'react-redux';

class FlashMessagesList extends React.Component {
  render() {
    const messages = this.props.messages.map(message =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
    );
    return (
      <div>{messages}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  };
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
