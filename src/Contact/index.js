import React from "react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    ScrollReveal().reveal(".contact-container", {
      delay: 200,
      reset: true,
    });
  }, []);
  return (
    <div id="contact-holder">
      <div className="my-skills">
        <h1 className="about-me-intro" id="contact-heading">
          CONTACT
        </h1>
        {/* <div className="blob"></div> */}
        <div className="contact-container">
          <div className="social-holder">
            <div className="social-about">
              <div>
                <div className="social-title">David Mejia</div>
                <div className="social-desc">Full-Stack Software Engineer</div>
              </div>
              <div>
                <div className="social-title">Email</div>
                <div className="social-email">davidmejiasoftware@gmail.com</div>
              </div>
            </div>
            <div className="socials-container-2">
              <div>
                <div className="social-title">Socials</div>
                <div className="social-links">
                  <a rel="noreferrer" href="https://www.linkedin.com/in/david7mejia/" target="_blank">
                    <div className="linkedin"></div>
                  </a>
                  <a rel="noreferrer" href="https://github.com/David7Mejia" target="_blank">
                    {" "}
                    <div className="github"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
