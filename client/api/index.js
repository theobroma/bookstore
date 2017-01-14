import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listBooks() {
        return axios.get(`${apiPrefix}/books`);
    },
    bookByID(bookID) {
        return axios.get(`${apiPrefix}/books/${bookID}`);
    },
    listAuthors() {
        return axios.get(`${apiPrefix}/authors`);
    },
    authorByName(authorName) {
        return axios.get(`${apiPrefix}/authors/${authorName}`);
    }
}
