import axios from 'axios';

import { getToken } from './_auth';

const client = axios.create({
  baseURL: 'https://reactnd-books-api.udacity.com',
  headers: {
    Accept: 'application/json',
    Authorization: getToken(),
  },
});

export default client;
