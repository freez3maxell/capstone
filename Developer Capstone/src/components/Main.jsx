import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import BookingPage from './BookingPage.jsx';
import About from './About.jsx';
import Menu from './Menu.jsx';
import Reservations from './Reservations.jsx';
import OrderOnline from './OrderOnline.jsx';
import Login from './Login.jsx';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </main>
  );
}

