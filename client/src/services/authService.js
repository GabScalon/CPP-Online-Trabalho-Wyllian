import api from './api';

// Register user
export const register = async (userData) => {
  try {
    const response = await api.post('/users/register', userData);
    if (response.data) {
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Registration failed';
  }
};

// Login user
export const login = async (username, password) => {
  try {
    const response = await api.post('/users/login', { username, password });
    if (response.data) {
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Login failed';
  }
};

// Logout user
export const logout = () => {
  localStorage.removeItem('userToken');
  localStorage.removeItem('user');
};

// Get current user
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};