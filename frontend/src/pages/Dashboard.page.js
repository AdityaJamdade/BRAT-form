import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './DashboardPage.css';

const BASE_API = 'http://localhost:8000/api';

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigate();

  useEffect(() => {
    // Fetch user details upon component mount
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      // Make an API request to fetch user details
      const response = await axios.get(BASE_API + '/user');
      const userData = response.data;
      setUser(userData);
    } catch (error) {
      console.error('Failed to fetch user details:', error);
      // Handle error case, such as redirecting to an error page
    }
  };

  const handleLogout = () => {
    // Perform logout logic, such as clearing user session or token
    // You can also redirect to the login page after logout
    navigation('/login');
  };

  const handleDeleteApplication = () => {
    // Perform delete application logic
    // This could involve making an API request to delete the application
    console.log('Deleting application');
  };

  const handleCreateApplication = () => {
    // Redirect to the application form page
    navigation('/form');
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-page">
        <div className="user-profile">
          {user && (
            <div className="profile-logo">
              {user.firstName && user.firstName.charAt(0)}
            </div>
          )}
        </div>
        <div className="user-details">
          {user && (
            <>
              <h2>Welcome, {user.firstName}</h2>
              <p>Email: {user.email}</p>
            </>
          )}
        </div>
        <div className="actions">
          <button onClick={handleDeleteApplication}>Delete Application</button>
          <button onClick={handleCreateApplication}>Create New Application</button>
        </div>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default DashboardPage;
