// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebase';
import '../css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Sign in the user with Firebase Authentication
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Retrieve user data from Firestore
      const userDoc = await firestore.collection('users').doc(user.uid).get();

      if (userDoc.exists) {
        const userData = userDoc.data();

        // Redirect to the appropriate dashboard based on the user type
        if (userData.isAgent) {
          // Navigate to the agent dashboard
          navigate('/agent-dashboard', { replace: true });
        } else {
          // Navigate to the user dashboard
          navigate('/dashboard', { replace: true });
        }

        console.log('User logged in successfully!');
      } else {
        console.error('User data not found in Firestore');
      }
    } catch (error) {
      console.error('Login failed', error.message);
    }
  };

  return (
    <body className='mybody'>
    <div class="login-container">
    <h2 class="login-title">Login</h2>
    <input
      class="login-input"
      type="email"
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
    />
    <div style={{ position: 'relative' }}>
      <input
        class="login-input"
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        class="peek-button"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? 'Hide Password' : 'Show Password'}
      >
        👁️
      </button>
    </div>
    <div>
      <button class="login-button" onClick={handleLogin}>Login</button>
    </div>
  
    {/* Add a link to navigate to the registration page */}
    <Link class="register-link" to="/register">Don't have an account? Register here.</Link>
  </div>
  </body>
  );
};

export default Login;
