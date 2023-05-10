import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  const openDropdown = () => {
    const dropdown = document.getElementById('dropdown');
    // Show the dropdown element
    dropdown.style.display = 'block';
  };

  const closeDropdown = () => {
    const dropdown = document.getElementById('dropdown');
    // Hide the dropdown element
    dropdown.style.display = 'none';
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="brat-logo.png" alt="Logo" />
        <span>BRAT Exam</span>
      </div>
      {!isMobile && <ul className="navbar-links">
        <li><Link className="links" to="/">Home</Link></li>
        <li><Link className="links" to="/login">Login</Link></li>
        <li><Link className="links" to="/register">Register</Link></li>
        <li><Link className="links" to="/about">About Us</Link></li>
      </ul>}
      {isMobile && <div className="navbar-links-mobile">
        <div className="dropdown" id='dropdown'>
          <div className="dropdown-content">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/login">Login</Link>
            <Link className="links" to="/register">Register</Link>
            <Link className="links" to="/about">About Us</Link>
          </div>
        </div>
      </div>}
    </nav>
  );
};

export default Navbar;