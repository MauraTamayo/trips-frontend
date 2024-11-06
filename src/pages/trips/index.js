// src/pages/trips/index.js
import { styled } from '@mui/material/styles';
import React from 'react';
import TripList from '../../features/trips/TripList';
import dataProducts from '../../utils/dataProducts' 
import Typography from '@mui/material/Typography';

const StyledTitle = styled(Typography)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  fontSize: "30px",
  paddingTop: "4%",
  // fontFamily: '"Poppins", sans-serif'
}));

const TripsPage = () => {
  return (
    <div>
      <StyledTitle variante="h1" >Disfruta tu viaje</StyledTitle>
      <TripList trips={dataProducts} />
    </div>
  );
};

export default TripsPage;
