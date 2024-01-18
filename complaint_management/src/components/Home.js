// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Consumer Complaint Solution System!</h2>
      <p>This is the homepage of your application.</p>

      {/* Add buttons to navigate to Register and Login pages */}
      <Link to="/register">
        <button>Register</button>
      </Link>

      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;
