import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './LandingPage.css';

const LandingPage = () => {
  const [loginTrue, setLoginTrue] = useState(false)

  useEffect(() => {
    const links = document.getElementsByClassName('links')
    console.log(links[1])
    if (links[1].innerHTML === 'Login') {
      setLoginTrue(true)
    } else if (links[1].innerHTML === 'Dashboard') {
      setLoginTrue(false)
    }
  }, [loginTrue])




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

        {!loginTrue ? (<Link to="/dashboard" className="landingpage-button landingpage-dashboard-button">
                        Your Dashboard
                      </Link>) : 
            (<Link to="/login" className="landingpage-button landingpage-dashboard-button">
              Login
            </Link>
            )
        }

      </div>
    </>
  );
};

export default LandingPage;
