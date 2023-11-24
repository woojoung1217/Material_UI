
/* eslint-disable */
import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Login2 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");





  return (

    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: "center", }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant='h5' sx={{ p: 1 }}>
          Sign In
        </Typography>
        <TextField label="Email Adress" required fullWidth name='email' autoComplete='email' autoFocus />
        <TextField label="Password" type='password' required fullWidth name='password' autoComplete='current-password' />

        <FormControlLabel control={<Checkbox value="remember" color='primary' />} label="remember me">Remember</FormControlLabel>
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3 }} >Sign in</Button>
        <Grid container>
          <Grid item xs>
            <Link style={{ textDecoration: "none" }}> Forgot Password?</Link>
          </Grid>
          <Grid item >
            <Link style={{ textDecoration: "none" }}> Sign Up</Link>
          </Grid>
        </Grid>
        <Button sx={{ mt: 3 }} variant='outlined' onClick={() => navigate("/")}> go to Main</Button>
      </Box>
    </Container>

  )
}

export default Login2