import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import lallb from '../images/lallb.jpg';
import ommo from '../images/ommo.jpg';
import omo from '../images/omo.jpg';
import gonder from '../images/Gondar.webp';

const images = [lallb, ommo, omo, gonder];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="welcome-section">
        <h2>Welcome to Azion Travels</h2>
        <p>Find the best deals and destinations to explore Ethiopia.</p>
        <button
          className="signup-button"
          onClick={() => (window.location.href = '/signup')}
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default Home;
