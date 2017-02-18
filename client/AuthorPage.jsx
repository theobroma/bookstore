import React, { Component } from 'react';
import shortid from 'shortid';
import Book from './Book';
import AuthorListItem from './AuthorListItem';
import api from './api';


export default class AuthorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      author: []
    };
  }

  componentDidMount() {
    const authorName = this.props.params.author;
    api.authorByName(authorName).then((result) => {
      this.setState({ items: result.data, author: result.data[0].author });
    });
  }

  render() {
    const { name, photo } = this.state.author;
    return (
      <section>
        <section className="section">
          <div className="container">
            <AuthorListItem key={shortid.generate()} item={this.state.author} />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.items.map(item => (<Book key={shortid.generate()} item={item} />))}
            </div>
          </div>
        </section>
      </section>
    );
  }
}
