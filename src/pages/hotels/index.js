// src/pages/hotels/index.js

import React, { useEffect, useState } from 'react';
import CatalogueHotels from '../../features/trips/CatalogueHotels';
import { listHotels } from '../../features/trips/hotelServices';
// import products from '../../utils/dataProducts'
import Header from '@/components/Header';

const TripsPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await listHotels();
        console.log('response: ',response)
        setHotels(response);
      } catch (error) {
        console.error("Error al obtener los hoteles:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div>
      <Header/>
      <CatalogueHotels hotels={hotels} />
      {console.log(hotels)}
    </div>
  );
};

export default TripsPage;
