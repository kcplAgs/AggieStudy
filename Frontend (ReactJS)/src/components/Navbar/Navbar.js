import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Ensure this path is correct

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/" exact={true} className="navbar-brand-link">AggieStudy</NavLink>
            </div>
            <ul className="navbar-links">
                <li><NavLink to="/" exact={true} activeClassName="active" className="navbar-link">Home</NavLink></li>
                <li><NavLink to="/courses" activeClassName="active" className="navbar-link">Courses</NavLink></li>
                <li><NavLink to="/about" activeClassName="active"className="navbar-link">About</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
