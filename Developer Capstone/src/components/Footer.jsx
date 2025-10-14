import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer className="pt-5 pb-3" role="contentinfo" aria-label="Site Footer">
            <div className="container">
                <div className="row text-center text-lg-start">
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 d-flex flex-column align-items-center align-items-lg-start">
                        <a href="/" aria-label="Go to homepage">
                            <img src="/assets/footerLogo.png" alt="Little Lemon Logo" width='100px'/>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <h3 className="">Little Lemon</h3>
                        <ul className="list-unstyled" aria-label="Footer Navigation">
                            <li><Link to="/" className="" aria-label="Home">Home</Link></li>
                            <li><Link to="/about" className="" aria-label="About us">About us</Link></li>
                            <li><Link to="/menu" className="" aria-label="Menu">Menu</Link></li>
                            <li><Link to="/reservations" className="" aria-label="Booking">Booking</Link></li>
                            <li><Link to="/order-online" className="" aria-label="Order online">Order online</Link></li>
                            <li><Link to="/login" className="" aria-label="Login">Login</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <h3 className="">Contact</h3>
                        <a href="tel:1234567890" className="d-block" aria-label="Call 123-456-7890">123-456-7890</a>
                        <a href="mailto:contact@littlelemon.com" aria-label="Email contact@littlelemon.com">contact@littlelemon.com</a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h3 className="">Socials</h3>
                        <div className="d-flex flex-row justify-content-center justify-content-lg-start gap-3 align-items-center align-items-lg-start " aria-label="Social Media Links">
                            <a href="#" className="" aria-label="Facebook"><i className="bi bi-facebook fs-4" aria-hidden="true"></i></a>
                            <a href="#" className="" aria-label="Twitter"><i className="bi bi-twitter fs-4" aria-hidden="true"></i></a>
                            <a href="#" className="" aria-label="Instagram"><i className="bi bi-instagram fs-4" aria-hidden="true"></i></a>
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
