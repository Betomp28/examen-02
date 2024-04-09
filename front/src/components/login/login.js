
import React, {useState} from 'react';
import PropTypes from 'prop-types';

import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import  axios  from 'axios';

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(user);
    console.log(password);
    
    axios.post('http://localhost:3008/user', { // con esto llamamos un api
      user, 
      password,
    })
   
    };
   return (
      <div >
        <Card sx={{ maxWidth: 345,margin: "auto" }}>
          <CardMedia
            component="img"
            height="350"
            width="75%"
            style={{ objectFit: 'contain' }}
            src="https://img2.rtve.es/i/?w=1600&i=1657019154219.jpg"
            alt="green iguana"
          />
        </Card>
        <br />
        <br />
        <TextField
         id="outlined-basic" 
        onChange={(e) => {setUser(e.target.value)}}  
        label="Nombre" 
        variant="outlined" />
        <br />
        <br />
        <TextField 
        id="outlined-basic" 
        label="Password" 
        onChange={(e) => {setPassword(e.target.value)}}
        type='password' 
        variant="outlined" />
        <br />
        <br />
        <Button onClick={handleSubmit} variant="contained">Ingresar</Button>
      </div>
    );
  };


Login.propTypes = {};

Login.defaultProps = {};

export default Login;
