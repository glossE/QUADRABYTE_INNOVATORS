import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../firebase';
import './Dashboard.css';
import NavigationBar from './NavigationBar';
import NavLinks from '../dashboard_components/NavLinks';
import { Link } from 'react-router-dom';

const Dashboard = ({ children }) => {
  const [activeIssues, setActiveIssues] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);

        // Fetch the user's active issues from Firestore
        const fetchActiveIssues = async () => {
          try {
            const querySnapshot = await firestore
              .collection('complaints')
              .where('userId', '==', user.uid)
              .where('status', '==', 'active')
              .get();

            const userIssues = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            setActiveIssues(userIssues);
          } catch (error) {
            console.error('Error fetching active issues', error.message);
          }
        };

        fetchActiveIssues();
      }
    });

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, []); // Run this effect only once when the component mounts

  return (
    <body className='dashbody'>
      {/* <div className='dashboard'>
      <div className="Navbar">
      <h2 className='headernav'>User Dashboard</h2>
      <Link className='navbar-dashboard' aria-current='page' to="/dashboard">Dashboard</Link>
      <Link className='navbar-comm' to="/dashboard/community-solutions">Community Solutions</Link>
      <Link className='navbar-comm' to="/dashboard/professional-contacts">Professional Contacts</Link>
      <Link  className='navbar-comm' to="/dashboard/new-complaint">New Complaint</Link>
    </div>
      </div> */}

      <NavigationBar/>
      {/* <div className='nav-links-container'>
        <NavLinks />
      </div> */}
      <div className='active-issues-container'>
        <h3>Active Issues</h3>
        <ul className='active-issues-list'>
          {activeIssues.map((issue) => (
            <li key={issue.id} className='active-issue-item'>
              {issue.title}
            </li>
          ))}
        </ul>
      </div>
    </body>
  );
};

export default Dashboard;
