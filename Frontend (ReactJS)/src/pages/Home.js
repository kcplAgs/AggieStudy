import React from 'react';
import './Home.css';
import {NavLink} from "react-router-dom"; // Ensure this path is correct

const Home = () => {
    return (
        <section className="home-container">
            <h1 className="home-title">Welcome to AggieStudy!</h1>
            <p className="home-description">
                Discover and enroll in the best courses tailored to your needs. Explore our extensive library of courses and start learning today.
            </p>
            <NavLink to="/courses">
                <button className="home-button">
                    <span>Get Started</span>
                </button>
            </NavLink>
        </section>
    );
};

export default Home;
