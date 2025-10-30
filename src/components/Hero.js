// src/components/Hero.js
import React, { useRef, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';
import useAnimateOnScroll from '../utils/AnimateOnScroll';

function Hero() {
  const addAnimateRef = useAnimateOnScroll(0.1);
  const heroTextRef = useRef(null);
  const heroButtonsRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroLeftColumnRef = useRef(null); // New ref for the left column

  useEffect(() => {
    addAnimateRef(heroLeftColumnRef.current); // Apply animation to the new column
    addAnimateRef(heroImageRef.current);
    // You might choose to animate heroTextRef and heroButtonsRef individually
    // or let the parent heroLeftColumnRef handle their combined animation.
    // For now, I'm just animating the column.
  }, [addAnimateRef]);

  const handleDownloadCV = () => {
    const cvUrl = process.env.PUBLIC_URL + '/Sanduni_Piyumika_CV.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">

        {/* New wrapper div for text and buttons */}
        <div className="hero-left-column animate-from-left" ref={heroLeftColumnRef}>
          <div className="hero-text"> {/* Text content */}
            <h1>Hi, I'm Sanduni Piyumika.</h1>
            <h2>Web Developer & UI/UX Designer</h2>
            <p>
              I craft engaging web experiences and intuitive user interfaces.
              Explore my work to see how I bring ideas to life.
            </p>
          </div>
          <div className="hero-buttons"> {/* Buttons */}
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href={process.env.PUBLIC_URL + '/Sanduni_Piyumika_CV.pdf'}
              download="Sanduni_Piyumika_CV.pdf"
              className="btn btn-secondary">
              Download My CV
            </a>
          </div>
        </div>

        <div className="hero-image animate-zoom-in" ref={heroImageRef}>
          <img src={profileImg} alt="Your Profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;