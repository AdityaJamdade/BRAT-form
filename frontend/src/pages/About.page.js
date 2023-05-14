import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './About.css';

const developers = [
  {
    name: 'Aditya Jamdade',
    githubUsername: 'AdityaJamdade',
  },
  {
    name: 'Darshan Udikeri',
    githubUsername: 'DarshanUdikeri',
  },
  {
    name: 'Arman Sayyed',
    githubUsername: 'Arman975',
  },
];

const About = () => {
  const [developerImages, setDeveloperImages] = useState([]);

  useEffect(() => {
    const fetchDeveloperImages = async () => {
      const images = await Promise.all(
        developers.map(async (developer) => {
          const response = await fetch(`https://api.github.com/users/${developer.githubUsername}`);
          const data = await response.json();
          return data.avatar_url;
        })
      );
      setDeveloperImages(images);
    };

    fetchDeveloperImages();
  }, []);

  return (
    <>
    <Navbar />
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="developer-grid">
        {developers.map((developer, index) => (
          <div className="developer-card" key={index}>
            <img className="developer-image" src={developerImages[index]} alt={developer.name} />
            <h2 className="developer-name">{developer.name}</h2>
            <a className="github-link" href={`https://github.com/${developer.githubUsername}`} target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default About;
