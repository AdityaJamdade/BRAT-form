import React from 'react';
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
      <a href="/form" className="landingpage-button">
        Fill out the entrance form
      </a>
    </div>
    </>
  );
};

export default LandingPage;
