
import apiClient from '../../services/apiClient';
import { setToken } from '../../utils/jwt';

export const register = async (data) => {
  try {
    const response = await apiClient.post('/auth/signup', data);
    return response.data;
  } catch (error) {
    // Verificar si el error tiene respuesta y si es un error de cliente (400)
    if (error.response && error.response.status === 400) {
      throw new Error("El nombre de usuario ya está en uso");
    } else {
      throw new Error("Ocurrió un problema al procesar el registro. Intente más tarde.");
    }
  }
};

export const login = async (credentials) => {
  console.log("credenciales: ",credentials)
  try {
    const response = await apiClient.post('/auth/signin', credentials);
    const token = response.headers['set-cookie']?.split('jwt=')[1].split(';')[0]; // Extraer el token de la cookie

    if (token) {
      setToken(token); // Usar la función setToken para almacenar el JWT
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};