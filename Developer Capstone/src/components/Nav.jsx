import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    const [collapsed, setCollapsed] = React.useState(true);

    return (
        <nav className="navbar navbar-expand-lg" aria-label="Main navigation" role="navigation">
            <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarNav"
                aria-expanded={!collapsed}
                aria-label="Toggle navigation menu"
                onClick={() => setCollapsed(!collapsed)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse${collapsed ? '' : ' show'}`} id="navbarNav">
                <ul className="navbar-nav ms-auto fw-bold" role="menubar">
                    <li className="nav-item" role="none">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/" aria-current="page" role="menuitem">Home</NavLink>
                    </li>
                    <li className="nav-item" role="none">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about" role="menuitem">About us</NavLink>
                    </li>
                    <li className="nav-item" role="none">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/menu" role="menuitem">Menu</NavLink>
                    </li>
                    <li className="nav-item" role="none">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/booking" role="menuitem">Booking</NavLink>
                    </li>
                    <li className="nav-item" role="none">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/order-online" role="menuitem">Order Online</NavLink>
                    </li>
                    <li className="nav-item" role="none">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/login" role="menuitem">Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
