import axios from 'axios';

const api = axios.create({
  /* API Development host
    TODO: Use .env
  */
  baseURL: 'http://192.168.0.22:3333',
});

export default api;
