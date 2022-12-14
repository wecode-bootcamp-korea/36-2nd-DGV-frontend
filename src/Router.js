import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Booking from './pages/Booking/Booking';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import Payment from './pages/Payment/Payment';
import Mypage from './pages/Mypage/Mypage';
import ReservedMovies from './pages/Mypage/MypageSubs/ReservedMovies';
import MypageMain from './pages/Mypage/MypageSubs/MypageMain';
import MovieChart from './pages/Moviechart/MovieChart';
import ComingUp from './pages/Moviechart/SubMovieChart/ComingUp';
import MovieList from './pages/Moviechart/SubMovieChart/MovieList';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/movies/:movieId" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/mypage/*" element={<Mypage />}>
          <Route index element={<MypageMain />} />
          <Route path="bookedlist" element={<ReservedMovies />} />
        </Route>
        <Route path="/moviechart/*" element={<MovieChart />}>
          <Route index element={<MovieList />} />
          <Route path="comingup" element={<ComingUp />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
