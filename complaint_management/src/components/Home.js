import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import heroImage from '../assets/hero-image.jpg'; // Update the path accordingly
import feature1 from '../assets/feature-icon-1.png';
import feature2 from '../assets/feature-icon-2.png';
import feature3 from '../assets/feature-icon-3.png';

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
                                </div>
                                <h4 className="feature-title mt-24">User-Friendly Interface</h4>
                                <p className="text-sm mb-0"> A successful community-based consumer complaint system with a user-friendly interface, ensuring simplicity, clarity, and responsiveness in navigation. </p>
                            </div>
                        </div>
                        <div className="feature text-center is-revealing">
                            <div className="feature-inner">
                                <div className="feature-icon">
                                </div>
                                <h4 className="feature-title mt-24">Community Engagement</h4>
                                <p className="text-sm mb-0"> Community engagement is fostered through features like commenting, upvoting/downvoting, and user profiles, creating a sense of accountability and support. </p>
                            </div>
                        </div>
                        <div className="feature text-center is-revealing">
                            <div className="feature-inner">
                                <div className="feature-icon">
                                </div>
                                <h4 className="feature-title mt-24">Resolution Tracking</h4>
                                <p className="text-sm mb-0">Resolution tracking is facilitated by personalized user dashboards, real-time updates, automated notifications, and comprehensive case history documentation. </p>
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
