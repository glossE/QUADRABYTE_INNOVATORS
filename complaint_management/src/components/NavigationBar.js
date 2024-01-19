// src/components/NavigationBar.js
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './NavigationBar.css'
import LogoutButton from './logout.js';

// const history=useHistory();

const NavigationBar = () => {
  const handleLogout = () => {
    localStorage.clear();
    // history.push('./login');
    // window.location.href = './login';
  };
  return (
    <div className="Navbar">
      <h2 className='headernav'>User Dashboard</h2>
      <div className='dashlinks'> 
      <Link className="navbar-dashboard" aria-current='page' to="/dashboard">Dashboard</Link>
      <Link className="navbar-comm" to="/community-solutions">Community Solutions</Link>
      <Link className='navbar-comm' to="/professional-contacts">Professional Contacts</Link>
      <Link  className='navbar-comm' to="/new-complaint">New Complaint</Link>
     
    </div>
    </div>
  );
};

export default NavigationBar;
