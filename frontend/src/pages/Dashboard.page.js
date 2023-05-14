import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './DashboardPage.css';

const BASE_API = 'http://localhost:8000/api/user';

const DashboardPage = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentProfile, setCurrentProfile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user details upon component mount
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        try {
            const localUser = JSON.parse(localStorage.getItem('user'));
            const { user, profile } = localUser;
            setCurrentUser(user);
            // currentUser.name = currentProfile.name;
            setCurrentProfile(profile[0]);
        } catch (error) {
            // console.error('Failed to fetch user details:', error);
            navigate('/login');
            // Handle error case, such as redirecting to an error page
        }
    };

    const handleLogout = () => {
        // Perform logout logic, such as clearing user session or token
        // You can also redirect to the login page after logout
        localStorage.removeItem('user');
        navigate('/login');
    };

    const handleDeleteApplication = async () => {
        console.log('Deleting application');
        try {
            // Make an API request to delete the application from the main database
            // api/user/profile
            console.log(currentUser.email)
            const response = await axios.delete(`${BASE_API}/profile`, {
                params: { email: currentUser.email }
            });
            console.log(response.data)

            // Clear currentProfile and application details
            setCurrentProfile(null);

            // Remove currentProfile from localStorage
            const localUser = JSON.parse(localStorage.getItem('user'));
            localUser.profile = [];
            localStorage.setItem('user', JSON.stringify(localUser));

            // Show a success message or perform any other necessary actions

        } catch (error) {
            console.log('catch')
            // Handle error case, such as displaying an error message
            console.error('Failed to delete application:', error);
        }
    };

    const handleCreateApplication = () => {
        // Redirect to the application form page
        // navigate('/form');
    };

    return (
        <>
            <Navbar />
            <div className="dashboard-page">
                <div className="user-profile">
                    {currentUser && (
                        <div className="profile-logo">
                            {currentUser.email && currentUser.email.charAt(0).toUpperCase()}
                        </div>
                    )}
                    <div className="user-details">
                        {currentUser && (
                            <>
                                <h2>Welcome {currentProfile?.name.split(' ')[0]}</h2>
                                <p>Email: {currentUser.email}</p>
                            </>
                        )}
                    </div>

                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
                <div className="application-details">
                    {currentProfile ? (
                        <>
                            <h3>Application Details</h3>
                            <p>Application Name: {currentProfile.email}</p>
                            <p>Application Date: {new Date(currentProfile.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
                            <div className="actions">
                                <button onClick={handleDeleteApplication}>Delete Application</button>
                            </div>
                        </>
                    ) : (
                        <div className="no-application">
                            <p>No application found.</p>
                            <Link to="/form">
                                <button onClick={handleCreateApplication}>Create a New Application
                                </button>

                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
