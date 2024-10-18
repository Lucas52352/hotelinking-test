import axios from "axios";
import { axiosInstance } from "./axiosInstance";

export const loginUser = async (credentials: { email: string; password: string }) => {
  try {


    const response = await axiosInstance.post('api/login', credentials);

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
    const response = await axiosInstance.post('api/register', userData)

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'An error occurred');
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
}

export const logoutUser = () => {
  localStorage.removeItem('access_token')

  window.location.href = '/login';
}

