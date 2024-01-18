import React from 'react';
// import './NavigationBar.css';

const LogoutButton = ({ onLogout }) => {
  return (
    <button onClick={onLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
