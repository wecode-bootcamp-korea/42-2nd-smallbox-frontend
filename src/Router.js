import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import MovieList from './pages/MovieList/MovieList';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import KaKaoAPI from './pages/Login/KakaoAPI';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/login" element={<KaKaoAPI />} />
        <Route path="/movieList" element={<MovieList />} />
        <Route path="/movieDetail" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
