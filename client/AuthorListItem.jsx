import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AuthorListItem extends Component {

  render() {
    const { name, photo } = this.props.item;
    return (
      <div>
        {/* <p>Hello from AuthorListItem</p>*/}
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image">
                <img src={`/images/${photo}`} alt="" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <Link to={`/authors/${name}`}>{name}</Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
