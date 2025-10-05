import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer className="pt-5 pb-3">
            <div className="container">
                <div className="row text-center text-lg-start">
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 d-flex flex-column align-items-center align-items-lg-start">
                        <a href="/">
                            <img src="/assets/footerLogo.png" alt="Little Lemon Logo" width='100px'/>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <h3 className="">Little Lemon</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="">Home</Link></li>
                            <li><Link to="/about" className="">About us</Link></li>
                            <li><Link to="/menu" className="">Menu</Link></li>
                            <li><Link to="/reservations" className="">Booking</Link></li>
                            <li><Link to="/order-online" className="">Order online</Link></li>
                            <li><Link to="/login" className="">Login</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <h3 className="">Contact</h3>
                        <a href="tel:1234567890" className="d-block">123-456-7890</a>
                        <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h3 className="">Socials</h3>
                        <div className="d-flex flex-row justify-content-center justify-content-lg-start gap-3 align-items-center align-items-lg-start ">
                            <a href="#" className=""><i className="bi bi-facebook fs-4"></i></a>
                            <a href="#" className=""><i className="bi bi-twitter fs-4"></i></a>
                            <a href="#" className=""><i className="bi bi-instagram fs-4"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
