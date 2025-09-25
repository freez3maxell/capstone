import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    const [collapsed, setCollapsed] = React.useState(true);

    return (
        <nav className="navbar navbar-expand-lg" aria-label="Main navigation">
            <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarNav"
                aria-expanded={!collapsed}
                aria-label="Toggle navigation"
                onClick={() => setCollapsed(!collapsed)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse${collapsed ? '' : ' show'}`} id="navbarNav">
                <ul className="navbar-nav ms-auto fw-bold">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/menu">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/reservations">Reservations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/order-online">Order Online</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
