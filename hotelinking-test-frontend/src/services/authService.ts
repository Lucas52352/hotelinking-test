import axios, { AxiosError } from "axios";
import { axiosInstance } from "./axiosInstance";

interface LoginResponse {
  token: string;
}

export const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post('/login', credentials); // No incluye el token CSRF
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'An error occurred');
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};


export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string
}) => {
  try {
    const response = await axiosInstance.post('/register', userData)
    console.log(response.data);

    return response.data
  } catch (error: unknown) {

    if (axios.isAxiosError(error)) {

      if (error.response) {

        throw new Error(error.response.data.message || 'An error occurred');
      }
      else if (error.request) {
        throw new Error('No response received from server');
      }
      else {
        throw new Error(error.message);
      }
    }
    else {
      throw new Error('An unexpected error ocurred');
    }
  }
}

export const getCSRFToken = async () => {
  try {
    await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
    console.log("CSRF token obtained successfully.");
  } catch (error) {
    console.error("Error obtaining CSRF token:", error);
    throw error;
  }
};



