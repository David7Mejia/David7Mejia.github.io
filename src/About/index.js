import {React, useEffect} from 'react';
import './About.css';
import ScrollReveal from 'scrollreveal';

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal('.about-me', {
      delay: 200,
      reset: true,
    });
  }, [])


  return (
      <div className="about-holder" id="about-holder">
        <p className="about-me-intro" id="about-me-intro">
          About
        </p>
        <p className="about-me">
          I'm an <span>ambitious</span> and <span>passionate</span> software
          engineer with an entrepreneurial mindset. Coming from a background in
          Human Physiology, I enjoy exploring the line between biology and
          technology. My favorite programming languages include
          <span> JavaScript</span>, <span>Python</span>. Topics I enjoy exploring are: AI, Blockchain,
          and AR/VR.
        </p>
      </div>
  );
 }

export default About;
