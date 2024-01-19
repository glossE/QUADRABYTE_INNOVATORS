import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { useParams } from 'react-router-dom';
import './IssueStatus.css';
import NavigationBar from './NavigationBar';
const IssueStatus = () => {
  const { issueId } = useParams();
  const [selectedIssue, setSelectedIssue] = useState(null);

  useEffect(() => {
    if (!issueId) {
      console.error('Issue ID not provided in the URL');
      return;
    }

    // Fetch the details of the selected issue based on the issueId
    const fetchSelectedIssue = async () => {
      try {
        const issueDoc = await firestore.collection('complaints').doc(issueId).get();

        if (issueDoc.exists) {
          setSelectedIssue({
            id: issueDoc.id,
            ...issueDoc.data(),
          });
        } else {
          console.error(`Issue with ID ${issueId} not found`);
        }
      } catch (error) {
        console.error('Error fetching selected issue', error.message);
      }
    };

    fetchSelectedIssue();
  }, [issueId]);

  return (
    <div>
     <NavigationBar/>  
    <div className='issue'>
      <h2>Issue Status</h2>
      {selectedIssue ? (
        <div>
          <h3>{selectedIssue.title}</h3>
          <p>{selectedIssue.description}</p>
          <p>Status: {selectedIssue.status}</p>
          {selectedIssue.agentMessage && (
            <div>
              <h4>Agent Message:</h4>
              <p>{selectedIssue.agentMessage}</p>
            </div>
          )}
          {/* Display other relevant details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
};

export default IssueStatus;
