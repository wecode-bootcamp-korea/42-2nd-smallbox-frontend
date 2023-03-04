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
import Seats from './pages/Booking/Seats';
import SelectMovie from './pages/Booking/SelectMovie';
import Payment from './pages/Booking/Payment/Payment';
import PaymentApproval from './pages/Booking/Payment/PaymentApproval';
import PaymentCancel from './pages/Booking/Payment/PaymentCancel';
import PaymentFail from './pages/Booking/Payment/PaymentFail';
import PaymentResult from './pages/Booking/Payment/PaymentResult';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/login" element={<KaKaoAPI />} />
        <Route path="/seats" elememt={<Seats />} />
        <Route path="/movieList" element={<MovieList />} />
        <Route path="/movieDetail" element={<MovieDetail />} />
        <Route path="/selectmovie" element={<SelectMovie />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/approval" element={<PaymentApproval />} />
        <Route path="/payment/cancel" element={<PaymentCancel />} />
        <Route path="/payment/fail" element={<PaymentFail />} />
        <Route path="/payment/result" element={<PaymentResult />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
