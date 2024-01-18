// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          navigate('/agent-dashboard');
        } else {
          // Navigate to the user dashboard
          navigate('/dashboard');
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
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {/* Add a link to navigate to the registration page */}
      <Link to="/register">Don't have an account? Register here.</Link>
    </div>
  );
};

export default Login;
