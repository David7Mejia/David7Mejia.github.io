import React from 'react';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'
import "./Contact.css";

const Contact = () => {

  useEffect(() => {
    ScrollReveal().reveal('.contact-container', {
      delay: 200,
      reset: true,
    });
  }, [])
  return (
    <div id='contact-holder'>
      <div className="my-skills">
        <p className="about-me-intro" id="skills-intro">
          Contact
        </p>

        <div className="contact-container">
          <a
            rel="noreferrer"
            className="linkedin"
            href="https://www.linkedin.com/in/david7mejia/"
            target="_blank"
          >
            <></>
          </a>
          <a
            rel="noreferrer"
            className="github"
            href="https://github.com/David7Mejia"
            target="_blank"
          >
            {" "}
            <></>
          </a>
          <a
            rel="noreferrer"
            className="email"
            href="mailto:davidmejiasoftware@gmail.com"
            target="_blank"
          >
            {" "}
            <></>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
