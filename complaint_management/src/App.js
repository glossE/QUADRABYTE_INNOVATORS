// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AgentDashboard from './agentcomponents/AgentDashboard';
import CommunitySolutions from './components/CommunitySolutions';
import NewComplaint from './components/NewComplaint';
import ProfessionalContacts from './components/ProfessionalContacts';
import ResolveIssue from './components/ResolveIssue';
import ProfessionalContactsAgent from './agentcomponents/ProfessionalContactsAgent';
import IssueStatus from './components/IssueStatus';
import CommunitySolutionsAgent from './agentcomponents/CommunitySolutionsAgent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/professional-contacts" element={<ProfessionalContacts />} />
        <Route path="/community-solutions" element={<CommunitySolutions />} />
        <Route path="/new-complaint" element={<NewComplaint/>}/>
        <Route path="/issue-status/:issueId" element={<IssueStatus/>}/>
          <Route path="/agent-dashboard" element={<AgentDashboard />} />
          <Route path="/professional-contacts-agent" element={<ProfessionalContactsAgent />} />
          <Route path="/community-solutions-agent" element={<CommunitySolutionsAgent />} />

          <Route path="/resolve-issue/:issueId" element={<ResolveIssue/>}/>         
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;