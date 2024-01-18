// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <div className="Navbar">
      <h2 className='headernav'>User Dashboard</h2>
      <Link className='navbar-dashboard' aria-current='page' to="/dashboard">Dashboard</Link>
      <Link className='navbar-comm' to="/community-solutions">Community Solutions</Link>
      <Link className='navbar-comm' to="/professional-contacts">Professional Contacts</Link>
      <Link  className='navbar-comm' to="/new-complaint">New Complaint</Link>
    </div>
  );
};

export default NavigationBar;
