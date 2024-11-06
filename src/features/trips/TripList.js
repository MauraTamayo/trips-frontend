import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useRouter } from 'next/router';

const TripList = ({ trips }) => {
  const [filter, setFilter] = useState('');
  const router = useRouter();

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleTripClick = (tripId) => {
    router.push(`/trips/${tripId}`);
  };

  // Filtra los viajes según el destino o cualquier otra propiedad que necesites
  const filteredTrips = trips.filter((trip) =>
    trip.destination.toLowerCase().includes(filter.toLowerCase()) ||
    trip.description.toLowerCase().includes(filter.toLowerCase()) // También puedes filtrar por descripción
  );

  return (
    <Box sx={{ padding: 4 }}>
      <TextField
        label="Filtrar por destino"
        variant="outlined"
        fullWidth
        value={filter}
        onChange={handleFilterChange}
        sx={{ marginBottom: 3 }}
      />
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredTrips.map((trip) => (
          <Grid xs={12} size={3} key={trip.id}>
            <Card onClick={() => handleTripClick(trip.id)} sx={{ cursor: 'pointer' }}>
              <CardMedia
                component="img"
                height="194"
                image={trip.image} // Aquí solo se usa `{trip.image}`
                alt={trip.destination}
              />
              <CardContent>
                <Typography variant="h5">{trip.destination}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {trip.description}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  Precio: ${trip.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TripList;
