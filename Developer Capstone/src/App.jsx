import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./components/Homepage.jsx";
import BookingPage from "./components/BookingPage.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
