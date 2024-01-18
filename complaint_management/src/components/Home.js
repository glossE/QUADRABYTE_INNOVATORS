// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import heroImage from '../assets/hero-image.jpg'; // Update the path accordingly
import feature1 from '../assets/feature-icon-01.png';
import feature2 from '../assets/feature-icon-02.png';
import feature3 from '../assets/feature-icon-03.png';

const Home = () => {
    return (
        <div  className="home-container">
            <img src={heroImage} alt="Hero" className="hero-image" />
            <h2 className="welcome-header">CONSUMER COMPLAINT SOLUTION SYSTEM!</h2>
            <p className="home-description"></p>

            {/* Add buttons to navigate to Register and Login pages */}
            <Link to="/register">
                <button className="register-button1">Register</button>
            </Link>

            <Link to="/login">
                <button className="login-button1">Login</button>
            </Link>
            <section className="features section">
            <div className="container">
                <div className="features-inner section-inner has-bottom-divider">
                    <div className="features-wrap">
                        <div className="feature text-center is-revealing">
                            <div className="feature-inner">
                                <div className="feature-icon">
                                    <img src={feature1} alt="Feature 01"></img>
                                </div>
                                <h4 className="feature-title mt-24">Real-Time Communication</h4>
                                <p className="text-sm mb-0">Real-time communication (RTC) refers to any communication that happens instantly or with minimal delay. In the context of technology, it often involves sending and receiving information in real time, enabling users to interact with each other instantly or near-instantly. </p>
                            </div>
                        </div>
                        <div className="feature text-center is-revealing">
                            <div className="feature-inner">
                                <div className="feature-icon">
                                    <img src={feature2} alt="Feature 02"></img>
                                </div>
                                <h4 className="feature-title mt-24">Easy-to-Use Interface</h4>
                                <p className="text-sm mb-0"> Easy-to-use interface is crucial for seamless real-time communication.Use intuitive icons for call controls, ensuring easy access and visibility during calls. Incorporate status indicators for user and connection statuses, and provide feedback on audio/video quality. </p>
                            </div>
                        </div>
                        <div className="feature text-center is-revealing">
                            <div className="feature-inner">
                                <div className="feature-icon">
                                    <img src={feature3} alt="Feature 03"></img>
                                </div>
                                <h4 className="feature-title mt-24">Secure File Sharing</h4>
                                <p className="text-sm mb-0">Implement end-to-end encryption to safeguard transmitted files from unauthorized access. Utilize secure channels for file transfer, and incorporate user authentication mechanisms to control access. Employ secure file storage practices, such as encryption at rest, to protect stored files. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        
    );
};

export default Home;
