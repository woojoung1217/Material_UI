

/* eslint-disable  */
import React from 'react';

import { useState, useEffect } from 'react';
import Blog from './components/Blog';
import { Route, Routes } from 'react-router-dom';
import Login2 from './components/Login';
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Animation from './components/Animation';
import axios from 'axios';
import DetailPage from './components/DetailPage';



function App() {

  const [fetchData, setFetchData] = useState([])
  const BaseURL = "https://test.api.weniv.co.kr/mall"
  useEffect(() => {
    axios.get(BaseURL)
      .then((response) => {
        setFetchData(response.data);
      })
      .catch((error) => {
        console.error('데이터를 불러오는 중 에러 발생:', error);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Blog></Blog>}></Route>
      <Route path='/detail' element={<DetailPage></DetailPage>}></Route>
      <Route path='/login' element={<Login2></Login2>}></Route>
      <Route path='/animation' element={<Animation></Animation>}></Route>
    </Routes>
  )
}

export default App;
