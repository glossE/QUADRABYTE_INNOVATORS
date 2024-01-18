// src/components/Dashboard.js
import React from 'react';
import NavigationBar from './NavigationBar';

const Dashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <NavigationBar />

      {/* Add content for active and resolved issues */}
      <p>Active Issues: ...</p>
      <p>Resolved Issues: ...</p>
    </div>
  );
};

export default Dashboard;
