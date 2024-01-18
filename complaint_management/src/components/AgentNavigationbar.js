// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

const AgentNavigationbar = () => {
  return (
    <div className="Navbar">
      <h2 className='headernav'>Agent Dashboard</h2>
      <Link className='navbar-dashboard' aria-current='page' to="/dashboard">Dashboard</Link>
      <Link className='navbar-comm' to="/community-solutions">Community Solutions</Link>
      <Link className='navbar-comm' to="/professional-contacts">Professional Contacts</Link>
      <Link  className='navbar-comm' to="/resolve-issue">Ongoing Issues</Link>
    </div>
  );
};

export default AgentNavigationbar;
