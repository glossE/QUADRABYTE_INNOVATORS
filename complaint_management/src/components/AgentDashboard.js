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

  const handleResolveClick = (issueId) => {
    // Your logic for resolving the issue and navigating to the resolution page
    
    console.log(`Resolve Issue clicked for issue with id: ${issueId}`);
  };

  return (
    <body>
      <div>
        <AgentNavigationbar />
      </div>
      <div className='active-issues-container'>
        <h3>All Active Issues</h3>
        <ul className='active-issues-list'>
          {activeIssues.map((issue) => (
            <li key={issue.id} className='active-issue-item'>
              {/* Display issue name and id */}
              {`ID: ${issue.id} - ${issue.title}`}
              {/* Add a button to navigate to the resolution page */}
              <div>
              <Link to={`/resolve-issue/${issue.id}`}>
                <button className='resolvebutton' onClick={() => handleResolveClick(issue.id)}>Resolve Issue</button>
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
