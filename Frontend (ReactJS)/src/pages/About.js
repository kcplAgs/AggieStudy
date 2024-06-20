import React from 'react';
import './About.css';
import {NavLink} from "react-router-dom"; // Ensure this path is correct

const About = () => {
    return (
        <section className="home-container">
            <h1 className="home-title">About AggieStudy</h1>
            <p className="home-description">
                AggieStudy provides a comprehensive platform where fellow Aggies can
                access a wide range of study materials, including previous exams, lecture notes,
                and other resources. Whether you are looking to review lecture notes, find past exam papers, or access
                high-quality study resources, AggieStudy has you covered. Join us in revolutionizing the way
                Aggies study, ensuring you have all the tools you need to succeed academically, all in one convenient location.
            </p>
            <NavLink to="/courses">
                <button className="home-button">
                    <span>Get Started</span>
                </button>
            </NavLink>
        </section>
    );
};

export default About;