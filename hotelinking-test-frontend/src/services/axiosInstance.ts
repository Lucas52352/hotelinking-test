import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

// axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.withXSRFToken = false;

axiosInstance.interceptors.request.use((config) => {

  const token = localStorage.getItem('access_token');

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }


  return config;
}, (error) => {
  return Promise.reject(error);
});
