// src/features/trips/TripList.js

import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Grid } from '@mui/material';

const TripList = ({ trips }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filtra los viajes según el destino o cualquier otra propiedad que necesites
  const filteredTrips = trips.filter((trip) =>
    trip.destination.toLowerCase().includes(filter.toLowerCase())
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
      <Grid container spacing={3}>
        {filteredTrips.map((trip) => (
          <Grid item xs={12} sm={6} md={4} key={trip.id}>
            <Card>
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
