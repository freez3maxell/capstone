import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useReducer } from 'react';
import Homepage from './Homepage.jsx';
import BookingPage from './BookingPage.jsx';
import About from './About.jsx';
import Menu from './Menu.jsx';
import Reservations from './Reservations.jsx';
import ConfirmedBooking from './ConfirmedBooking.jsx';
import { initializeTimes, updateTimes, submitFormLogic } from './AdditionalBookingLogic.jsx';

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    await submitFormLogic(formData, navigate);
  };

  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
  );
}
