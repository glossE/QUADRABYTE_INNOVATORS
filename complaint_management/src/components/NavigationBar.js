// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/community-solutions">Community Solutions</Link>
      <Link to="/professional-contacts">Professional Contacts</Link>
      <Link to="/new-complaint">New Complaint</Link>
    </div>
  );
};

export default NavigationBar;
