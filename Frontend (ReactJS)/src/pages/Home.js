import React from 'react';
import './Home.css';
import {NavLink} from "react-router-dom"; // Ensure this path is correct

const Home = () => {
    return (
        <section className="home-container">
            <h1 className="home-title">AggieStudy: Your Ultimate Study Companion</h1>
            <p className="home-description">
                Welcome to the one-stop destination for Texas A&M students dedicated to making exam preparation easier and more efficient.
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
