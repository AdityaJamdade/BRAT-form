import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    // Check if user is present in localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="brat-logo.png" alt="Logo" />
        <span>BRAT Exam</span>
      </div>
      {!isMobile && <ul className="navbar-links">
        <li><Link className="links" to="/">Home</Link></li>
        {userLoggedIn ? (
            <li>
              <Link className="links" to="/dashboard">
                Dashboard
              </Link>
            </li>
          ) : (
            <li>
              <Link className="links" to="/login">
                Login
              </Link>
            </li>
          )}
        <li><Link className="links" to="/about">About Us</Link></li>
      </ul>}
      {isMobile && <div className="navbar-links-mobile">
        <div className="dropdown" id='dropdown'>
          <div className="dropdown-content">
            <Link className="links" to="/">Home</Link>
            {userLoggedIn ? (
              <Link className="links" to="/dashboard">
                Dashboard
              </Link>
          ) : (
              <Link className="links" to="/login">
                Login
              </Link>
          )}
            <Link className="links" to="/about">About Us</Link>
          </div>
        </div>
      </div>}
    </nav>
  );
};

export default Navbar;
