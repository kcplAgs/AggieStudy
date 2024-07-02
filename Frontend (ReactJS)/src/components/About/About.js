import React from 'react';
import { NavLink } from "react-router-dom";
import './About.css';

const About = () => {
    const teamMembers = [
        { name: "Cameron Stone", role: "Full-Stack Developer", image: "" },
        { name: "Lucas Bryant", role: "Full-Stack Developer", image: "" },
    ];

    return (
        <div className="about-container">
            <section className="about-intro">
                <h1 className="about-title">About AggieStudy</h1>
                <p className="about-description">
                    AggieStudy is your comprehensive platform for accessing a wide range of study materials,
                    including previous exams, lecture notes, and other valuable resources. We're here to
                    revolutionize the way Aggies study, ensuring you have all the tools you need to succeed academically.
                </p>
            </section>

            <section className="about-mission">
                <h2 className="section-title">Our Mission</h2>
                <p>
                    Our mission is to empower Texas A&M students by providing a centralized hub for all their study needs.
                    We believe in collaborative learning and aim to foster a community where knowledge is shared freely.
                </p>
            </section>

            <section className="about-features">
                <h2 className="section-title">Key Features</h2>
                <ul>
                    <li>Access to previous exams and solutions</li>
                    <li>Comprehensive lecture notes</li>
                    <li>User-friendly interface for easy navigation</li>
                    <li>Continuously updated resource library</li>
                    <li>Community-driven content sharing</li>
                </ul>
            </section>

            <section className="about-team">
                <h2 className="section-title">Meet Our Team</h2>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <img src={member.image} alt={member.name} className="team-member-image" />
                            <h3 className="team-member-name">{member.name}</h3>
                            <p className="team-member-role">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="about-cta">
                <h2 className="section-title">Ready to Get Started?</h2>
                <NavLink to="/courses" className="cta-button">
                    Explore Courses
                </NavLink>
            </section>
        </div>
    );
};

export default About;