import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import './Dashboard.css';
import NavigationBar from './NavigationBar';
import NavLinks from '../dashboard_components/NavLinks';

const AgentDashboard = () => {
  const [activeIssues, setActiveIssues] = useState([]);

  useEffect(() => {
    // Fetch all active issues from Firestore
    const fetchActiveIssues = async () => {
      try {
        const querySnapshot = await firestore
          .collection('complaints')
          .where('status', '==', 'active')
          .get();

        const allActiveIssues = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setActiveIssues(allActiveIssues);
      } catch (error) {
        console.error('Error fetching active issues', error.message);
      }
    };

    fetchActiveIssues();
  }, []); // Run this effect only once when the component mounts

  return (
    <body className='dashbody'>
      <div className='dashboard'>
        
      </div>
      <div className='nav-links-container'>
        
      </div>
      <div className='active-issues-container'>
        <h3>All Active Issues</h3>
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

export default AgentDashboard;
