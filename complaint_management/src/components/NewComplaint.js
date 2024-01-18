import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../firebase';
import '../css/complaint.css';

const NewComplaint = () => {
  const [complaintData, setComplaintData] = useState({
    title: '',
    description: '',
    serviceProviderProduct: '',
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is authenticated, fetch the user document
        fetchUser(user.uid);
      } else {
        console.error('User not authenticated.');
      }
    });

    return () => unsubscribe(); // Cleanup the subscription when the component unmounts
  }, []); // Run this effect only once when the component mounts

  const fetchUser = async (userId) => {
    try {
      // Fetch the user document from Firestore
      const userDoc = await firestore.collection('users').doc(userId).get();
      console.log(userDoc);
      // Do something with userDoc if needed
    } catch (error) {
      console.error('Error fetching user document', error.message);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add complaint to Firestore
      await firestore.collection('complaints').add({
        userId: auth.currentUser.uid, // Use the current user's ID directly
        title: complaintData.title,
        description: complaintData.description,
        serviceProviderProduct: complaintData.serviceProviderProduct,
        status: 'active',
        // Add other fields as needed
      });

      // Clear form fields after submission
      setComplaintData({
        title: '',
        description: '',
        serviceProviderProduct: '',
        // Clear other fields as needed
      });

      // Optionally, you can provide user feedback about successful submission
    } catch (error) {
      console.error('Error submitting complaint', error.message);
    }
  };
  return (
    <div className="new-complaint-container">
      <h2 className="complaint-title">New Complaint</h2>
      <form onSubmit={handleFormSubmit} className="complaint-form">
        {/* Add form fields for complaint details */}
        <label className="complaint-label">
          Title:
          <input
            type="text"
            name="title"
            value={complaintData.title}
            onChange={(e) => setComplaintData({ ...complaintData, title: e.target.value })}
            required
            className="complaint-input"
          />
        </label>
        {/* Add other form fields */}
        <label className="complaint-label">
          Description:
          <textarea
            name="description"
            value={complaintData.description}
            onChange={(e) => setComplaintData({ ...complaintData, description: e.target.value })}
            required
            className="complaint-textarea"
          />
        </label>
        <label className="complaint-label">
          Service Provider / Product:
          <input
            type="text"
            name="serviceProviderProduct"
            value={complaintData.serviceProviderProduct}
            onChange={(e) => setComplaintData({ ...complaintData, serviceProviderProduct: e.target.value })}
            required
            className="complaint-input"
          />
        </label>
        <button type="submit" className="complaint-submit-button">Submit Complaint</button>
      </form>
    </div>
  );
};

export default NewComplaint;
