import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Booking from './pages/Booking/Booking';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import Payment from './pages/Payment/Payment';
import Seats from './pages/Seats/Seats';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/seats" element={<Seats />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;