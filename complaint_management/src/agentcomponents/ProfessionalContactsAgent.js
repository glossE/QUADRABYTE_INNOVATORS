import React from 'react';
import './ProfessionalContactsAgent.css'
import AgentNavigationbar from './AgentNavigationbar';
// import NavigationBar from './NavigationBar';
const ProfessionalContacts = () => {
  const companyContacts = [
    {
      companyName: 'Airtel',
      phoneNumber: '123-456-7890',
      email: 'info@airtel.com',
      customerCare: '(020) 44444121',
      fiber: '121'
    },
    {
      companyName: 'Jio',
      phoneNumber: '987-654-3210',
      email: 'info@jio.com',
      customerCare: '7000770007',
      fiber: '7000570005'
    },
    {
      companyName: 'Vi',
      phoneNumber: '965-429-7000',
      email: 'customercare@vodafoneidea.com',
      customerCare: '199',
      fiber: '9822012345'
    },
    {
      companyName: 'BSNL',
      phoneNumber: '1800-425-1957',
      email: 'cmdcomplaints@bsnl.co.in',
      customerCare: '1800-180-1503',
      fiber: '1800-4444'
    }
    // Add more companies as needed
  ];

  return (
    <div>
      <AgentNavigationbar />
      <div className="probody">
        <div className="professional-contacts">
          
          <h2>Professional Contacts</h2>
          <ul>
            {companyContacts.map((contact, index) => (
              <li key={index}>
                <strong>{contact.companyName}</strong>
                <p>Phone: {contact.phoneNumber}</p>
                <p>Email: {contact.email}</p>
                <p>Customer Care: {contact.customerCare}</p>
                <p>Fiber: {contact.fiber}</p>
              </li>
            ))}
          </ul>
        </div> 
      </div>
    </div>
  );
};

export default ProfessionalContacts;
