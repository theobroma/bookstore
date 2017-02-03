import React, { Component } from 'react';
import NavigationBar from './NavigationBar';

export default class Header extends Component {
  render() {
    return (
      <div className = "header">
        <div className = "container">
          <NavigationBar/>
        </div>
      </div>
    );
  }
}
