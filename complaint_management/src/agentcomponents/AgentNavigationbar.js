// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AgentNavigationBar.css'

const AgentNavigationbar = () => {
  return (
    <div className="Navbar">
      <h2 className='headernav'>Agent Dashboard</h2>
      <Link className='navbar-dashboard' aria-current='page' to="/agent-dashboard">Dashboard</Link>
      <Link className='navbar-comm' to="/community-solutions-agent">Community Solutions</Link>
      <Link className='navbar-comm' to="/professional-contacts-agent">Professional Contacts</Link>
      <Link  className='navbar-comm' to="/resolve-issue"></Link>
    </div>
  );
};

export default AgentNavigationbar;
