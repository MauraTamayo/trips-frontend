import { hotelsClient } from '../../services/apiClient';

// export const hotelDetail = async (id) => {
// try {
//     const response = await apiClient.post(`/api/hotels/${id}`);
//     return response.data;
// } catch (error) {
//     // Verificar si el error tiene respuesta y si es un error de cliente (400)
//     if (error.response && error.response.status === 400) {
//       throw new Error("No se encuentra el detalle");
//     } else {
//       throw new Error("Ocurrió un problema al procesar el detalle del hotel. Intente más tarde.");
//     }
// }
// };


export const listHotels = async () => {
	try {
		const response = await hotelsClient.get('/hotels', {withCredentials: true,});
		console.log("Lista de hoteles", response);
		console.log("Lista de hoteles", response.status);
		return response.data;
	} catch (error) {
		throw new Error("Ocurrió un problema al procesar la lista de hoteles. Intente más tarde.");
	}
}