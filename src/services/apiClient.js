// apiClient.js
import axios from 'axios';

// Cliente para autenticación
const authClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Cliente para hoteles
const hotelsClient = axios.create({
  baseURL: 'http://localhost:8088/api',
  headers: {
    'Content-Type': 'application/json'
  },
});
// console.log('hotelsClient:',hotelsClient)
export { authClient, hotelsClient };

