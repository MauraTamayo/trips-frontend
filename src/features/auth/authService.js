
import apiClient from '../../services/apiClient';

export const register = async (data) => {
  console.log('data:',data)
  try {
    const response = await apiClient.post('/auth/signup', data);
    console.log('data:',data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/signin', credentials);
    const token = response.headers['set-cookie'] || null; 
    if (token) {
      localStorage.setItem('jwtToken', token);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
