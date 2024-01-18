import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../firebase';
import './Dashboard.css';
import NavigationBar from './NavigationBar';
import NavLinks from '../dashboard_components/NavLinks';

const Dashboard = () => {
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
      <div className='dashboard'>
        <NavigationBar />
      </div>
      <div className='nav-links-container'>
        <NavLinks />
      </div>
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
