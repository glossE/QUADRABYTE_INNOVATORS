import React, { useState } from 'react';
import './NavLinks.css'
const IssueWidget = ({ issue }) => {
  const [showProgressBar, setShowProgressBar] = useState(false);
  const toggleProgressBar = () => {
    setShowProgressBar(!showProgressBar);
  };

  return (
    <body>
    <div className="issue-widget">
      <div className="dropdown" onClick={toggleProgressBar}>
        <div>
          <h2>{issue.title}</h2>
          <p>Description: {issue.description}</p>
          <p>Register Time: {issue.registerTime}</p>
          <p>State: {issue.state}</p>
          <p>Region: {issue.region}</p>
        </div>
        <div className={`my-button ${showProgressBar ? 'expanded' : ''}`} onClick={toggleProgressBar}>
        <span>Track Progress {showProgressBar ? '▼' : '▲'}</span>
      </div>
      {showProgressBar && (
        <div className="expanded-content">
          <div >
            <div
              // className="progress"
              style={{ width: `${issue.progress}%` }}
            ></div>
          </div>
          <p>
            Progress Rate: {issue.progressRate}
          </p>
        </div>
      )}
    </div>
	</div>
    </body>
  );
};

const NavLinks = () => {
  const sampleIssues = [
    {
      title: 'Active Issue 1',
      description: 'Lorem ipsum dolor sit amet.',
      registerTime: '2024-01-18 10:30 AM',
      state: 'In Progress',
      region: 'North',
      progress: 50, // Adjust the progress value based on actual data
	  progressRate: '75%',

    },
    // Add more issue objects as needed
  ];

  return (
    <div className="NavLinks">
      {sampleIssues.map((issue, index) => (
        <IssueWidget key={index} issue={issue} />
      ))}
    </div>
  );
};

export default NavLinks;
