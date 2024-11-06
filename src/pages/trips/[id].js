// // pages/trips/[id].js

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import { Box, Typography, Card, CardContent, CircularProgress } from '@mui/material';

// const TripDetail = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [trip, setTrip] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (id) {
//       const fetchTrip = async () => {
//         setLoading(true);
//         try {
//           // Simulación de una llamada a API para obtener los detalles del viaje
//           const response = await fetch(`/api/trips/${id}`); 
//           const data = await response.json();
//           setTrip(data);
//         } catch (error) {
//           console.error("Error al cargar los detalles del viaje:", error);
//         }
//         setLoading(false);
//       };

//       fetchTrip();
//     }
//   }, [id]);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   if (!trip) {
//     return <Typography variant="h6">Viaje no encontrado</Typography>;
//   }

//   return (
//     <Box sx={{ padding: 4 }}>
//       <Card>
//         <CardContent>
//           <Typography variant="h4" gutterBottom>
//             {trip.destination}
//           </Typography>
//           <Typography variant="body1" color="text.secondary" gutterBottom>
//             {trip.description}
//           </Typography>
//           <Typography variant="h6" sx={{ marginTop: 2 }}>
//             Precio: ${trip.price}
//           </Typography>
//           <Typography variant="body1" sx={{ marginTop: 2 }}>
//             Fecha de Salida: {trip.departureDate}
//           </Typography>
//           <Typography variant="body1" sx={{ marginTop: 2 }}>
//             Duración: {trip.duration} días
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default TripDetail;


// pages/trips/[id].js

import { useRouter } from 'next/router';
import { Box, Typography, Card, CardContent } from '@mui/material';

const TripDetail = () => {
  const router = useRouter();
  const trip = router.query; // Obtenemos los datos del viaje desde la query

  if (!trip || !trip.destination) {
    return <Typography variant="h6">Viaje no encontrado</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {trip.destination}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {trip.description}
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Precio: ${trip.price}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Fecha de Salida: {trip.departureDate}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Duración: {trip.duration} días
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TripDetail;
