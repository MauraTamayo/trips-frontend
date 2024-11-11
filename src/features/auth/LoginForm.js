// "use client"

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Checkbox, Button, Typography, Box, Link, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { login } from './authService';

const ContainerBoxStyled = styled(Box)(() => ({
  flexGrow: 1,
  backgroundColor: '#070F1B',
  height: 'calc(100vh - 2px)',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
}));

const BodyBoxStyled = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  backgroundColor: '#050E18',
  borderRadius: '8px',
  border: '0.5px solid #212938',
  width: '30rem'
}));

const FormBoxStyled = styled(Box)(() => ({
  width: '100%',
  margin: 'auto',
  flexDirection: 'column',
  justifyContent: 'center',
  display: 'flex',
  height: '70%',
}));

const TextFieldBoxStyled = styled(TextField)(() => ({
  margin: '3% 0',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  display: 'flex',
}));

const ButtomStyled = styled(Button)(() => ({
  backgroundColor: '#EFF1F7',
  color: '#002A88'
}));

const ButtomStyledLink = styled(Button)(() => ({
  backgroundColor: '#0B0E14',
  margin: '2% 0',
  color: '#fff',
  width: '100%'
}));

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      router.push('/hotels'); // Redirige a la página de viajes
    } catch (error) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <ContainerBoxStyled>
      <BodyBoxStyled>
        <h1 style={{ justifyContent: 'center', display: 'flex' }}>Bienvenido!</h1>
        <Typography variant="body4" gutterBottom>
          Iniciar sesión para continuar
        </Typography>
        <FormBoxStyled component="form" onSubmit={handleSubmit}>
          <TextFieldBoxStyled
            label="username"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="tu@correo.com"
            name="username"
            onChange={handleChange}
          />
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Link
              component="button"
              type="button"
              variant="body2"
              sx={{ alignSelf: 'baseline' }}
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>
          <TextFieldBoxStyled
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="••••••"
            name="password"
            onChange={handleChange}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
            <Checkbox />
            <Typography variant="body2">Acuérdate de mi</Typography>
          </Box>
          <ButtomStyled type="submit" fullWidth variant="contained">
            Iniciar sesión
          </ButtomStyled>
          <Typography variant="body2" sx={{ margin: '1rem 0' }}>
            ¿No tienes una cuenta? <Link href="/signup" style={{ color: '#1976d2' }}>Regístrate</Link>
          </Typography>
          <Divider>or</Divider>
          <ButtomStyledLink variant="outlined" fullWidth>
            Sign in with Google
          </ButtomStyledLink>
          <ButtomStyledLink variant="outlined" fullWidth>
            Sign in with Facebook
          </ButtomStyledLink>
        </FormBoxStyled>
        {error && <Typography color="error" sx={{ marginTop: '1rem' }}>{error}</Typography>}
      </BodyBoxStyled>
    </ContainerBoxStyled>
  );
};

export default Login;
