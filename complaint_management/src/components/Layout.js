// Layout.js

import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <div style={{ marginTop: '60px', padding: '20px' }}>
        {/* Adjust the marginTop based on your navbar height */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
