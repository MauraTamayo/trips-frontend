// apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  withCredentials: true, // Permite que se incluyan las cookies
});

export default apiClient;