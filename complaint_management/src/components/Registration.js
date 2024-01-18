// Registration.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, firestore } from '../firebase';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

      console.log('User registered successfully!');
    } catch (error) {
      console.error('Registration failed', error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
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

      {/* Add a checkbox for selecting the agent entity */}
      <label>
        Register as Agent:
        <input
          type="checkbox"
          checked={isAgent}
          onChange={(e) => setIsAgent(e.target.checked)}
        />
      </label>

      <button onClick={handleRegister}>Register</button>

      {/* Add a link to navigate to the login page */}
      <Link to="/login">Already have an account? Login here.</Link>
    </div>
  );
};

export default Registration;
