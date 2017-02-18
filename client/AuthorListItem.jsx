import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AuthorListItem extends Component {

  render() {
    const { name, photo } = this.props.item;
    return (
      <div className="columns">
        <div className="box column">
          <article className="media">
            <div className="media-left">
              <figure className="image">
                <img src={`/images/${photo}`} alt="" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>
                    <Link to={`/authors/${name}`}>{name}</Link>
                  </strong>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
