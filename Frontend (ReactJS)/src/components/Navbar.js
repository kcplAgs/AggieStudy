import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div classname = "navbar-brand">
                <NavLink to = "/" exact>AggieStudy</NavLink>
            </div>
            <ul className="navbar-links">
                <li><NavLink to = "/" exact>AggieStudy</NavLink></li>
                <li><NavLink to="/courses" activeClassName="active">Courses</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;