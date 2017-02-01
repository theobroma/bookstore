import React, { Component } from 'react';
import classnames from 'classnames';

export default class AvatarForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {<pre>{JSON.stringify(this.state,"", 4)}</pre>}
      </div>
    );
  }
}
