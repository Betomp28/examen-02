
import React from 'react';
import PropTypes from 'prop-types';
import { LoginWrapper } from './login.styled';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => (
   <div>
    <Card sx={{ maxWidth: 345 }}/>

      <CardMedia
        component="img"
        height="350"
        width="75%"
        style={{ objectFit: 'contain' }} // Estilo CSS para ajustar la imagen dentro del contenedor manteniendo la relación de aspecto
        src="https://img2.rtve.es/i/?w=1600&i=1657019154219.jpg"
        alt="green iguana"
      />
      <br />
      <br />
      <TextField id="outlined-basic" label="Nombre" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="Password" type='password' variant="outlined" />
      <br />
      <br />
      <Button variant="contained">Ingresar</Button>

</div>
 
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
