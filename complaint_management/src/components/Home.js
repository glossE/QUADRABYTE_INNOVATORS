// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

const Home = () => {
  return (
    <div className="home-container">
    <h2 className="welcome-header">Welcome to the Consumer Complaint Solution System!</h2>
    <p className="home-description">This is the homepage of your application.</p>

    {/* Add buttons to navigate to Register and Login pages */}
    <Link to="/register">
      <button className="register-button">Register</button>
    </Link>

    <Link to="/login">
      <button className="login-button">Login</button>
    </Link>
  </div>
  );
};

export default Home;
