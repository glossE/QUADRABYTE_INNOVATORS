// Registration.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, firestore } from '../firebase';
import '../css/register.css';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAgent, setIsAgent] = useState(false);

  const handleRegister = async () => {
    try {
      // Create the user in Firebase Authentication
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Create a user document in Firestore
      await firestore.collection('users').doc(user.uid).set({
        email,
        isAgent,
        // Add other user details as needed
      });

      alert('User registered successfully!');
       alert('You are registered');
    } catch (error) {
      alert('Registration failed, user already exists', error.message);
    }
  };

  return (
    <body className='nybody'>
    <div class="register-container">
      <h2 class="register-title">Register</h2>
      <input
        class="register-input"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div style={{ position: 'relative' }}>
        <input
          class="register-input"
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
      <label class="register-checkbox-label">
        Register as Agent:
        <input
          class="register-checkbox"
          type="checkbox"
          checked={isAgent}
          onChange={(e) => setIsAgent(e.target.checked)}
        />
      </label>
      <div>
      <button class="register-button" onClick={handleRegister}>Register</button>
      </div>
      {/* Add a link to navigate to the login page */}
      <Link class="login-link" to="/login">Already have an account? Login here.</Link>
    </div>
  </body>
  
  );
};

export default Registration;
