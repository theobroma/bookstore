import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listBooks() {
        return axios.get(`${apiPrefix}/books`);
    },
    listAuthors() {
        return axios.get(`${apiPrefix}/authors`);
    }
}
