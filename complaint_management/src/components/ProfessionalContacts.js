import React from 'react';

const ProfessionalContacts = () => {
  const companyContacts = [
    {
      companyName: 'Airtel',
      phoneNumber: '123-456-7890',
      email: 'info@airtel.com',
    },
    {
      companyName: 'Jio',
      phoneNumber: '987-654-3210',
      email: 'info@jio.com',
    },
    // Add more companies as needed
  ];

  return (
    <div className="professional-contacts">
      <h2>Professional Contacts</h2>
      <ul>
        {companyContacts.map((contact, index) => (
          <li key={index}>
            <strong>{contact.companyName}</strong>
            <p>Phone: {contact.phoneNumber}</p>
            <p>Email: {contact.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalContacts;
