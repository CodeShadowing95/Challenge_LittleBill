import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

import { Sidebar, Feed, Feature, SearchFeed, SalesFeed } from './components';
import Auth from './components/Auth/Auth';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
  console.log(user);

  return (
  <BrowserRouter>
    <Box sx={{
      display: 'flex',
      alignItems: 'start',
      backgroundColor: '#F5F5F5',
    }}>
      {/* {user && <Sidebar/>} */}
      <Sidebar/>
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/feature/:id" element={<Feature />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/sales" element={<SalesFeed />} />
        <Route path="/auth" exact element={!user ? <Auth /> : <Feed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  )
}

export default App