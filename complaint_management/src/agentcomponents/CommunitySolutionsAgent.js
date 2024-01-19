// CommunitySolutions.js
import React, { useState, useEffect } from 'react';
import { firestore, storage } from '../firebase';
import '../css/community.css';
// import NavigationBar from './NavigationBar';
import AgentNavigationbar from './AgentNavigationbar';

const CommunitySolutions = () => {
  const [queries, setQueries] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    solution: '',
    video: null,
  });

  const [showComplaintForm, setShowComplaintForm] = useState(false);

  useEffect(() => {
    // Fetch queries from Firestore when the component mounts
    const fetchQueries = async () => {
      try {
        const querySnapshot = await firestore.collection('communityQueries').get();
        const fetchedQueries = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQueries(fetchedQueries);
      } catch (error) {
        console.error('Error fetching queries', error.message);
      }
    };

    fetchQueries();
  }, []);

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;

    // For handling file inputs (e.g., video upload)
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0], // Assuming only one file is selected
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      let videoURL = null;

      // Upload video to storage if provided
      if (formData.video) {
        const storageRef = storage.ref();
        const videoRef = storageRef.child(`videos/${formData.video.name}`);
        await videoRef.put(formData.video);

        // Get the download URL for the uploaded video
        videoURL = await videoRef.getDownloadURL();
      }

      // Upload the new query to Firestore
      await firestore.collection('communityQueries').add({
        title: formData.title,
        description: formData.description,
        solution: formData.solution,
        video: videoURL, // Store the download URL in Firestore
        // Add other fields as needed
      });

      // Refresh the queries after submission
      const updatedQuerySnapshot = await firestore.collection('communityQueries').get();
      const updatedQueries = updatedQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQueries(updatedQueries);

      // Clear form fields after submission
      setFormData({
        title: '',
        description: '',
        solution: '',
        video: null,
      });

      setShowComplaintForm(false);
    } catch (error) {
      console.error('Error submitting query', error.message);
    }
  };

  const toggleComplaintForm = () => {
    setShowComplaintForm(!showComplaintForm);
  };


  return (
    <body className='yobody'>
  
<h2 className="community-solutions-title"></h2>
<AgentNavigationbar />
<div className="community-solutions">

<button onClick={toggleComplaintForm} className="register-complaint-button">
Post Solution
</button>

{/* Display complaint form if the button is clicked */}
{showComplaintForm && (
  <div className="complaint-form">
    <h2>Post Solution</h2>
    <form onSubmit={handleFormSubmit} className="query-form">
      <label className="form-label" >
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleFormChange}
          required
          className="form-input"
          placeholder='Enter Title Here'
        />
      </label>
      <label className="form-label">
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleFormChange}
          required
          className="form-textarea"
          placeholder='Enter Description Here'
        />
      </label>
      <label className="form-label">
        Solution:
        <textarea
          name="solution"
          value={formData.solution}
          onChange={handleFormChange}
          required
          className="form-textarea"
          placeholder='Enter Solution Here'
        />
      </label>
      <label className="form-label">
        Video (optional):
        <input type="file" name="video" onChange={handleFormChange} accept="video/*" className="form-input" />
      </label>
      <button type="submit" className="form-submit-button">
        Submit 
      </button>
    </form>
  </div>
)}

{/* Display existing queries */}
{queries.map((query) => (
  <div key={query.id} className="query-container">
    <h3 className="query-title">{query.title}</h3>
    <p className="query-description">{query.description}</p>
    <p className="query-solution">{query.solution}</p>
    
    {/* Add video display if available */}
    {query.video && (
      <video controls width="300" className="query-video">
        <source src={query.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </div>
))}

</div>
</body>


  );
};

export default CommunitySolutions;
