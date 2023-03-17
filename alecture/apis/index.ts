import axios from 'axios';

export const AxiosInstance = axios.create({ baseURL: 'http://localhost:3095/api', withCredentials: true });

AxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  },
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    return err;
  },
);
