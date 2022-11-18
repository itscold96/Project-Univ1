import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main/Main';
import UsageStatus from 'pages/UserStatus/UsageStatus';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/UsageStatus' element={<UsageStatus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
