import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { useParams } from 'react-router-dom';
import './ResolveIssue.css'
import AgentNavigationbar from '../agentcomponents/AgentNavigationbar';

const ResolveIssue = () => {
  const { issueId } = useParams();
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [currentStage, setCurrentStage] = useState('analysis');
  const [progressMessage, setProgressMessage] = useState('');
  const [agentMessage, setAgentMessage] = useState('');

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

  const handleNextStage = async () => {
    // Update the issue status based on the current stage
    let newStatus;
    switch (currentStage) {
      case 'analysis':
        newStatus = 'active';
        break;
      case 'solution':
        newStatus = 'active';
        break;
      case 'resolution':
        newStatus = 'active';
        break;
      case 'completion':
        newStatus = 'resolved';
        break;
      default:
        newStatus = 'active';
    }

    // Update the issue status and agent message in Firestore
    try {
      await firestore.collection('complaints').doc(issueId).update({
        status: newStatus,
        agentMessage: agentMessage, // Store the agent message in the Firestore document
      });
      setProgressMessage(`Issue moved to ${newStatus} stage.`);
    } catch (error) {
      console.error('Error updating issue status', error.message);
    }

    // Move to the next stage
    switch (currentStage) {
      case 'analysis':
        setCurrentStage('solution');
        break;
      case 'solution':
        setCurrentStage('resolution');
        break;
      case 'resolution':
        setCurrentStage('completion');
        break;
      case 'completion':
        // You may handle completion or any other logic here
        break;
      default:
        setCurrentStage('Assigned');
    }
  };

  return (
    <div className='resolve'>
      <AgentNavigationbar/>
      <h2>Resolve Issue</h2>
      {selectedIssue ? (
        <div>
          <h3>{selectedIssue.title}</h3>
          <p>{selectedIssue.description}</p>
          <p>Status: {selectedIssue.status}</p>
          <p>Current Stage: {currentStage}</p>
          {progressMessage && <p>{progressMessage}</p>}

          {/* Input for agent message */}
          <textarea
            placeholder="Enter a message to the user..."
            value={agentMessage}
            onChange={(e) => setAgentMessage(e.target.value)}
          />

          <button onClick={handleNextStage}>Move to Next Stage</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ResolveIssue;
