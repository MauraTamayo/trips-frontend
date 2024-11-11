// pages/hotels/CatalogueHotels.js
import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useRouter } from 'next/router';

const CatalogueHotels = ({ hotels }) => {
  const [filter, setFilter] = useState('');
  const router = useRouter();

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleHotelClick = (hotelId) => {
    router.push(`/hotels/${hotelId}`);
  };

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(filter.toLowerCase()) ||
    hotel.short_description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box sx={{ padding: 4, background: "#070F1B" }}>
      <TextField
        label="Busqueda de Hoteles"
        variant="outlined"
        fullWidth
        value={filter}
        onChange={handleFilterChange}
        sx={{ marginBottom: 3}}
      />
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredHotels.map((hotel) => (
          <Grid size={3} key={hotel.id}>
            <Card onClick={() => handleHotelClick(hotel.id)} sx={{ cursor: 'pointer' }}>
              <CardMedia
                component="img"
                height="194"
                image={hotel.image}
                alt={hotel.name}
              />
              <CardContent>
                <Typography variant="h5">{hotel.name}</Typography>
                <Typography variant="h5">{hotel.city}</Typography>
                <Typography variant="h5">{hotel.address}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {hotel.short_description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CatalogueHotels;
