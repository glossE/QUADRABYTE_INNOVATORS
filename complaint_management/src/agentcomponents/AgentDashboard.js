import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import './AgentDashboard.css';
import AgentNavigationbar from './AgentNavigationbar';

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
    <body>
      <div>
        <AgentNavigationbar />
      </div>
      <div className='active-issues-container'>
        <h3>All Active Issues</h3>
        <ul className='active-issues-list'>
          {activeIssues.map((issue) => (
            <li key={issue.id} className='active-issue-item' oncl>
              {`ID: ${issue.id} - ${issue.title}`}
              <div>
              {/* Pass the issue.id to the ResolveIssue component */}
              <Link to={`/resolve-issue/${issue.id}`}>
                <button>Resolve Issue</button>
              </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </body>
  );
};

export default AgentDashboard;
