import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listBooks() {
        return axios.get(`${apiPrefix}/books`);
    }
}
