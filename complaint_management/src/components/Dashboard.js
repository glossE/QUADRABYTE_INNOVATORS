// src/components/Dashboard.js
import React from 'react';
import NavigationBar from './NavigationBar';
import NavLinks from '../dashboard_components/NavLinks';
import SearchBox from '../dashboard_components/SearchBox';
import Button from '../dashboard_components/Button';
const Dashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <NavigationBar />
      <div> 
        <NavLinks />
        <SearchBox />
        <Button />
      </div>
      {/* Add content for active and resolved issues */}
      <p>Active Issues: ...</p>
      <p>Resolved Issues: ...</p>
    </div>
  );
};

export default Dashboard;
