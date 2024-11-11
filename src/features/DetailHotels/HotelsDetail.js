import {useRouter} from 'next/router';
import {
	Box,
	Typography,
	Card,
	CardContent,
	CardMedia,
	Chip,
	Button,
	Divider,
	TextField
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Grid2';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useState, useEffect} from 'react';
import {roomDetails} from '../../utils/dataDetailsProducts';

const HotelsDetail = () => {
	const router = useRouter();
	const {id} = router.query;

	const [hotelRooms, setHotelRooms] = useState([]);
	const [roomCounts, setRoomCounts] = useState({});
	const [reservation, setReservation] = useState(null);

	useEffect(() => {
		if (id) {
			const filteredRooms = roomDetails.filter((room) => room.hotelId === id);
			setHotelRooms(filteredRooms);
		}
	}, [id]);

	const handleRoomCountChange = (roomId, value) => {
		setRoomCounts((prevCounts) => ({
			...prevCounts,
			[roomId]: value
		}));
	};

	const handleReserve = (room) => {
    const numberOfRooms = roomCounts[room.id] || 1;
    const newReservation = {
      roomId: room.id,
      roomName: room.name,
      roomPrice: room.price,
      numberOfRooms,
      isPaid: false,
      roomImg:room.image
    };
  
    let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    reservations.push(newReservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));
  };
  

	if (!hotelRooms.length) {
		return <Typography variant="h6">No se encontraron habitaciones para este hotel</Typography>;
	}

	return (
		<Box sx={
			{
				margin: 'auto',
				padding: 2
			}
		}>
			<Typography variant="h4" gutterBottom>
				Habitaciones disponibles
			</Typography>
			<Grid container
				rowSpacing={2}
				columnSpacing={
					{
						xs: 1,
						sm: 2,
						md: 3
					}
			}>
				{
				hotelRooms.map((room) => (
					<Grid size={4}
						key={
							room.id
					}>
						<Card sx={
							{
								display: 'flex',
								flexDirection: 'column',
								mb: 4
							}
						}>
							<CardMedia component="img" height="200"
								image={
									room.image
								}
								alt={
									room.name
								}/>
							<CardContent sx={
								{
									display: 'flex',
									flexDirection: 'column'
								}
							}>
								<Box sx={
									{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										mt: 2
									}
								}>
									<Typography variant="h5" fontWeight="bold">
										{
										room.name
									}</Typography>
									<Box sx={
										{
											display: 'flex',
											alignItems: 'center'
										}
									}>
										<Typography variant="h6" color="primary">
											{
											room.rating
										}</Typography>
										<StarIcon sx={
											{
												color: '#fbc02d',
												ml: 0.5
											}
										}/>
									</Box>
								</Box>
								<Typography variant="body2" color="text.secondary">
									{
									room.location
								} </Typography>
								<Box sx={
									{mt: 2}
								}>
									<Typography variant="subtitle1" fontWeight="bold">
										{
										room.roomType
									}</Typography>
									<Typography variant="body2" color="text.secondary">
										{
										room.roomDetails
									}</Typography>
									<Typography variant="body2" color="text.secondary">
										{
										room.beds
									}</Typography>
								</Box>
								<Box sx={
									{
										mt: 2,
										display: 'flex',
										gap: 1
									}
								}>
									{
									room.benefits.map((benefit, index) => (
										<Chip key={index}
											label={benefit}
											color="success"
											icon={<CheckCircleIcon/>}/>
									))
								} </Box>
								<Box sx={
									{
										mt: 2,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between'
									}
								}>
									<Box> {
										room.oldPrice && (
											<Typography variant="body2" color="text.secondary"
												sx={
													{textDecoration: 'line-through'}
											}>
												{
												room.oldPrice
											} </Typography>
										)
									}
										<Typography variant="h5" fontWeight="bold" color="text.primary">
											{
											room.price
										}</Typography>
										<Typography variant="caption" color="text.secondary">
											{
											room.taxes
										}</Typography>
									</Box>
								</Box>
								<Divider sx={
									{my: 2}
								}/>
								<Box sx={
									{
										justifyContent: 'space-between',
										display: 'flex'
									}
								}>
									<TextField label="Número de habitaciones" type="number"
										value={
											roomCounts[room.id] || 1
										}
										onChange={
											(e) => handleRoomCountChange(room.id, e.target.value)
										}
										inputProps={
											{min: 1}
										}
										sx={
											{width: '150px'}
										}/>
									<Button variant="contained" color="primary"
										onClick={
											() => handleReserve(room)
									}>
										Reservar
									</Button>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))
			} </Grid>
		</Box>
	);
};

export default HotelsDetail;
