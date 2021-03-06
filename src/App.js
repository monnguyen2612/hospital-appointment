import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Hospitals from './routes/Hospitals';
import HospitalPage from './routes/HospitalPage';
import BookingPage from './routes/BookingPage';
import LocationPage from './routes/LocationPage';
import ServicePage from './routes/ServicePage';
import HomePage from './routes/HomePage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop>
      <Route path="/" component={Navbar} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/search" exact component={Hospitals} />
      <Route path="/hospital-page/:hospitalId" exact component={HospitalPage} />
      <Route path="/hospital-page/:hospitalId/:doctorId" exact component={BookingPage} />
      <Route path="/location" exact component={LocationPage} />
      <Route path="/" exact component={ServicePage} />
      <Route path="/home" exact component={HomePage} />
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
