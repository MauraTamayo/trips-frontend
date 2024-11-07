import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  MenuItem, 
  Select
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { useRouter } from 'next/router';
import {register} from './authService';

const roles = [
  { value: 'user', label: 'Usuario' },
  { value: 'mod', label: 'Moderador' },
];

const ContainerBoxStyled = styled(Box)(() => ({
  flexGrow: 1,
  backgroundColor: '#070F1B',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const BodyBoxStyled = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  backgroundColor: '#050E18',
  borderRadius: '8px',
  border: '0.5px solid #212938',
  width: '50%',
}));

const FormGridStyled = styled(Grid)(() => ({
  width: '100%',
  marginTop: '1rem',
}));

const StyledButton = styled(Button)(() => ({
  marginTop: '1.5rem',
  alignSelf: 'flex-end',
}));

const TextFieldBoxStyled = styled(TextField)(() => ({
  margin: '3% 0',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  display: 'flex',
}));

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: []
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "role") {
      setFormData((prev) => ({
        ...prev,
        [name]: typeof value === "string" ? value.split(',') : value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      router.push('/login');
    } catch (error) {
      setError(error.message); // Muestra el mensaje específico del error
    }
  };

  return (
    <ContainerBoxStyled component="form" onSubmit={handleSubmit}>
      <BodyBoxStyled>
        <Typography variant="h4" component="h1" gutterBottom color="white" sx={{ textAlign: 'center' }}>
          Te estamos esperando
        </Typography>
        <Typography variant="body2" color="gray" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
          ¡Encontrarás los mejores planes!
        </Typography>
        
        <FormGridStyled container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6}>
            <TextFieldBoxStyled
              name="username"
              label="Nombre completo"
              variant="outlined"
              fullWidth
              placeholder="Jhon Alexander Castiblanco Lopez"
              onChange={handleChange}
            />
          </Grid>
          <Grid size={6}>
            <TextFieldBoxStyled
              name="email"
              label="Correo electrónico"
              variant="outlined"
              fullWidth
              placeholder="tu@correo.com"
              onChange={handleChange}
            />
          </Grid>
          <Grid size={6}>
            <TextFieldBoxStyled
              name="password"
              label="Contraseña"
              variant="outlined"
              fullWidth
              type="password"
              placeholder="Contraseña segura"
              onChange={handleChange}
            />
          </Grid>
          <Grid size={6}>
          <Select
              name="role"
              multiple
              fullWidth
              value={formData.role}
              onChange={handleChange}
              renderValue={(selected) => selected.join(', ')}
            >
             {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid size={6}>
            <TextFieldBoxStyled
              name="country"
              label="País"
              variant="outlined"
              fullWidth
              placeholder="Colombia"
            />
          </Grid>
          <Grid size={6}>
            <TextFieldBoxStyled
              name="city"
              label="Ciudad"
              variant="outlined"
              fullWidth
              placeholder="Bogotá"
            />
          </Grid>
          <Grid size={6}>
            <TextFieldBoxStyled
              name="address"
              label="Dirección"
              variant="outlined"
              fullWidth
              placeholder="Calle 70 # 79-89"
            />
          </Grid>
          <Grid size={6}>
            <TextFieldBoxStyled
              name="phone"
              label="Celular"
              variant="outlined"
              fullWidth
              placeholder="3213554348"
            />
          </Grid>
        </FormGridStyled>
        
        <StyledButton type="submit" variant="contained" color="primary">
          Registrar
        </StyledButton>
        
        {error && <Typography color="error" sx={{ marginTop: '1rem' }}>{error}</Typography>}
      </BodyBoxStyled>
    </ContainerBoxStyled>
  );
};

export default Signup;
