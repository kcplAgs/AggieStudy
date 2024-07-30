import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../components/Footer/Footer';

const Home = () => {
    const [activeFeature, setActiveFeature] = useState(null);

    const features = [
        {
            title: "Comprehensive Resources",
            description: "Access a wide range of study materials, including previous exams, lecture notes, and other resources.",
            icon: "📚"
        },
        {
            title: "Exam Preparation",
            description: "Review past exam papers and practice questions to ensure you're well-prepared for your exams.",
            icon: "✏️"
        },
        {
            title: "Collaborative Learning",
            description: "Join fellow Aggies in revolutionizing the way we study, ensuring you have all the tools you need to succeed academically.",
            icon: "🤝"
        }
    ];

    return (
        <div className="home">
            <section className="hero">
                <h1>AggieStudy</h1>
                <p className="mission">The ultimate study companion for Texas A&M students</p>
                <Link to="/courses" className="cta-button">Get Started</Link>
            </section>

            <section className="stats">
                <div className="stat-item">
                    <h2>1,000+</h2>
                    <p>Study Questions</p>
                </div>
                <div className="stat-item">
                    <h2>0+</h2>
                    <p>Active Users</p>
                </div>
                <div className="stat-item">
                    <h2>2+</h2>
                    <p>Courses Covered</p>
                </div>
            </section>

            <section className="features">
                <div className="features-container">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature ${activeFeature === index ? 'active' : ''}`}
                            onMouseEnter={() => setActiveFeature(index)}
                            onMouseLeave={() => setActiveFeature(null)}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
                <Link to="/courses" className="cta-button">Dive In</Link>
            </section>
            <Footer/>
        </div>
    );
};

export default Home;