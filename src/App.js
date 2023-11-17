

/* eslint-disable  */
import * as React from 'react';
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
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Blog from './components/Blog';
import { Route, Routes } from 'react-router-dom';
import Login2 from './components/Login';





function App() {


  return (
    <div>

      <Routes>
        <Route path="/" element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login2></Login2>}></Route>
      </Routes>


    </div>
  );
}

export default App;
