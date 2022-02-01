import axios from 'axios';
import store from './states/store';
import { apiUrl } from './config';

const http = () => {
  let token = store.getState().user?.token;
  let verifyToken = store.getState().user?.verifyToken;

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  if (verifyToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${verifyToken}`;
  }

  return axios.create({
    baseURL: apiUrl,
  });
};

export default http;
