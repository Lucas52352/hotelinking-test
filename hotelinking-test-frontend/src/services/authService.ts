import axios, { AxiosError } from "axios";
import { axiosInstance } from "./axiosInstance";

export const loginUser = async (credentials: { email: string; password: string }) => {
  try {

    axiosInstance.get('sanctum/csrf-cookie')

    const response = await axiosInstance.post('api/login', credentials); // No incluye el token CSRF
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
    axiosInstance.get('sanctum/csrf-cookie')
    const response = await axiosInstance.post('api/register', userData)

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


