import React from 'react';
import '../css/Hero.css'; // for custom styles
import HeroImage from '../images/bg.jpg';// adding image
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// using react bootstrap
function Hero() {
    return (
        <div className="hero-container" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="hero-content">
        <div className="text-container">
          <h1 style={{ fontFamily: ' sans-serif' }}>BlueTick Consultants</h1>
          <h2 style={{ fontFamily: 'Lato, sans-serif' }}>Founded in 2017</h2>
          <p style={{ fontFamily: 'Lato, sans-serif' }}>A technology-driven firm that has made a significant impact in the Indian and US startup ecosystems. Transforming Enterprises with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>
          <a href="https://www.bluetickconsultants.com/generative-ai.html" className="tour-button" style={{ fontFamily: 'Roboto, sans-serif' }}>Take a Tour</a>
        </div>
      </div>
    </div>
  );
}
    // exporting component
export default Hero;


