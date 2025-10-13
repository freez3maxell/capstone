import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useReducer } from 'react';
import Homepage from './Homepage.jsx';
import BookingPage from './BookingPage.jsx';
import About from './About.jsx';
import Menu from './Menu.jsx';
import Reservations from './Reservations.jsx';
import OrderOnline from './OrderOnline.jsx';
import Login from './Login.jsx';
import ConfirmedBooking from './ConfirmedBooking.jsx';
import { fetchAPI, submitAPI } from '../utilities/api.js';

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES' && action.date) {
    const dateObj = typeof action.date === 'string' ? new Date(action.date) : action.date;
    return fetchAPI(dateObj);
  }
  return state;
};

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('/booking-confirmed');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}
