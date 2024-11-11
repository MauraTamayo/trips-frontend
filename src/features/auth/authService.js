import { authClient }  from '../../services/apiClient';
// import { setToken } from '../../utils/jwt';

export const register = async (data) => {
	try {
		const response = await authClient.post('/auth/signup', data);
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
	try {
		const response = await authClient.post('/auth/signin', credentials);
		console.log("Autenticación exitosa", response);
		return response.data;
	} catch (error) {
		throw new Error("Error en la autenticación. Intente más tarde.");
	}
}
