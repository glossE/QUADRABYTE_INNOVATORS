// ResolveIssue.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const ResolveIssue = ({ selectedIssueId }) => {
  const [selectedIssue, setSelectedIssue] = useState(null);

  useEffect(() => {
    // Fetch the details of the selected issue based on the selectedIssueId
    const fetchSelectedIssue = async () => {
      try {
        const issueDoc = await firestore.collection('complaints').doc(selectedIssueId).get();

        if (issueDoc.exists) {
          setSelectedIssue({
            id: issueDoc.id,
            ...issueDoc.data(),
          });
        } else {
          console.error(`Issue with ID ${selectedIssueId} not found`);
        }
      } catch (error) {
        console.error('Error fetching selected issue', error.message);
      }
    };

    fetchSelectedIssue();
  }, [selectedIssueId]); // Re-run the effect when selectedIssueId changes

  return (
    <div>
      <h2>Resolve Issue</h2>
      {selectedIssue ? (
        <div>
          <h3>{selectedIssue.title}</h3>
          <p>{selectedIssue.description}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ResolveIssue;
