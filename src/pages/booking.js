// src/pages/hotels/index.js

// import React, { useEffect, useState } from 'react';
import Booking from '../features/listBooking/Booking';
// import { listHotels } from '../../features/trips/hotelServices';
import Header from '@/components/Header';

const Pagebooking = () => {
  // const [hotels, setHotels] = useState([]);

  // useEffect(() => {
  //   const fetchHotels = async () => {
  //     try {
  //       const response = await listHotels();
  //       setHotels(response);
  //     } catch (error) {
  //       console.error("Error al obtener los hoteles:", error);
  //     }
  //   };

  //   fetchHotels();
  // }, []);

  return (
    <div>
      <Header/>
      <Booking/>
    </div>
  );
};

export default Pagebooking;
