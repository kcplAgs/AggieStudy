import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Sections</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Connect</h3>
                    <p>
                        <a href="https://github.com/kcplAgs/AggieStudy" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </p>
                    <p>
                        <a href="mailto:aggiestudy@gmail.com">aggiestudy@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 AggieStudy. All rights reserved.</p>
            </div>
        </footer>

    );

}

export default Footer;