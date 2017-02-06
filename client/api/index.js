import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
  listBooks() {
    return axios.get(`${apiPrefix}/books`);
  },
  bookByID(bookID) {
    return axios.get(`${apiPrefix}/books/${bookID}`);
  },
  listGenres() {
    return axios.get(`${apiPrefix}/genres`);
  },
  genreByName(genreName) {
    return axios.get(`${apiPrefix}/genres/${genreName}`);
  },
  listAuthors() {
    return axios.get(`${apiPrefix}/authors`);
  },
  authorByName(authorName) {
    return axios.get(`${apiPrefix}/authors/${authorName}`);
  }
};
