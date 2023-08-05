import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Sidebar, Feed, Feature, SearchFeed, SalesFeed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{
      backgroundColor: '#F5F5F5',
      display: 'flex',
      height: '100vh',
    }}>
      <Sidebar/>
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/feature/:id" element={<Feature />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/sales/:id" element={<SalesFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App