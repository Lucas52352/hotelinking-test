import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.withXSRFToken = false;

axiosInstance.interceptors.request.use((config) => {
  const token = getCookie('XSRF-TOKEN');

  if (token) {
    console.log("CSRF token obtained successfully.", token);

    // Asignar el token a los encabezados
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(token);
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

const getCookie = (name: string): string | undefined => {
  // Agregar un punto y coma inicial a document.cookie para facilitar la búsqueda
  const value = `; ${document.cookie}`;

  // Dividir las cookies usando el nombre de la cookie que queremos extraer
  const parts = value.split(`; ${name}=`);

  // Si hay más de una parte, significa que la cookie existe
  if (parts.length === 2) {
    // Obtener la parte que contiene el valor de la cookie
    return parts.pop()?.split(';').shift();
  }

  // Si no se encuentra la cookie, devuelve undefined
  return undefined;
};
