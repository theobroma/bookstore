import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="columns center-xs">
            <a className = "forkme-link" href="https://github.com/theobroma/bookstore">
              <span className="icon">
                <i className="fa fa-github" />
              </span>
              Project repository
            </a>
          </div>
        </div>
      </div>
    );
  }
}
