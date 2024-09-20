// src/api/auth.js
import axios from 'axios';

// Axios instance with JWT token
const axiosInstance = axios.create({
  baseURL: '/api',
});

export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

// Call this function after login
export const login = async (email, password) => {
  const res = await axiosInstance.post('/login', { email, password });
  localStorage.setItem('token', res.data.token);
  setAuthToken(res.data.token);
};

// Call this after logout
export const logout = () => {
  localStorage.removeItem('token');
  setAuthToken(null);
};
