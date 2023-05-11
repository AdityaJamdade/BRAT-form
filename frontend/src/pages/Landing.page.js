import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <div className="landingpage-container">
      <h1 className="landingpage-heading">
      <div >
        <img className="body-logo" src="brat-logo.png" alt="Logo" />
      </div>
        BRAT Entrance Exam
      </h1>
      <p className="landingpage-text">
        Welcome to the BRAT entrance exam. We are dedicated to providing the best education and career opportunities for our students.
      </p>
      <Link to="/form" className="landingpage-button">
        Fill out the entrance form
      </Link>
    </div>
    </>
  );
};

export default LandingPage;
