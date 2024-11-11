// pages/reservations.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Divider, Button } from '@mui/material';
import { useRouter } from 'next/router';

const Booking = () => {
  const [reservations, setReservations] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservations(storedReservations);
  }, []);

  const handleDelete = (index) => {
    const updatedReservations = [...reservations];
    updatedReservations.splice(index, 1);
    setReservations(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
  };

  const handlePay = (id) => {
    router.push(`/payment?id=${id}`);
  };

  if (!reservations.length) {
    return <Typography variant="h6">No hay reservas disponibles</Typography>;
  }

  return (
    <Box sx={{ margin: 'auto', padding: 2, background: "#070F1B" }}>
      <Typography variant="h4" gutterBottom>
        Lista de Reservas
      </Typography>
      {reservations.map((reservation, index) => (
        <Card key={index} sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold">Habitación: {reservation.roomName}</Typography>
            <Typography variant="body2" color="text.secondary">Precio por noche: {reservation.roomPrice}</Typography>
            <Typography variant="body2" color="text.secondary">Número de habitaciones: {reservation.numberOfRooms}</Typography>
            <Typography variant="body2" color="text.secondary">Estado: {reservation.isPaid ? 'Pagada' : 'Pendiente'}</Typography>
            {reservation.isPaid && (
              <>
                <Typography variant="body2" color="text.secondary">Fecha de pago: {reservation.paymentDate}</Typography>
                <Typography variant="body2" color="text.secondary">Monto pagado: {reservation.totalAmount}</Typography>
                <Typography variant="body2" color="text.secondary">ID de transacción: {reservation.transactionId}</Typography>
              </>
            )}
            <Divider sx={{ my: 2 }} />
            {!reservation.isPaid && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" color="primary" onClick={() => handlePay(reservation.roomId)}>
                  Pagar
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(index)}>
                  Eliminar
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Booking;
