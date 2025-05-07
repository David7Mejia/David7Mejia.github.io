import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PDF from "../assets/DMResume2025.pdf";
import useScroll from "../Hooks/useScroll";
import "./Navbar.css";
import cn from "classnames";

const Navbar = () => {
  const position = useScroll();
  useEffect(() => {}, [position]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    return;
  };

  const handleNavClick = (event, targetId) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offset = 80; // Offset in pixels
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <nav
      className={cn("navbar", {
        has_scrolled: position !== 0,
      })}
      id="navbar"
    >
      <div className="logo-holder">
        <a href="#landing-holder" className="navbar-logo">
          DM
        </a>
      </div>
      <div className="page-links">
        <div
          className={cn("hamburger", {
            is_open: isOpen,
          })}
          onClick={handleClick}
        ></div>
        <div
          className={cn("ham-nav", {
            open_ham: isOpen,
          })}
        >
          <div className="">
            <a href="#about-holder" onClick={e => handleNavClick(e, "#about-holder")}>
              ABOUT
            </a>
          </div>
          <div className="">
            <a href="#my-projects" onClick={e => handleNavClick(e, "#my-projects")}>
              WORK
            </a>
          </div>
          <div className="">
            <a id="resume-link" className="resume-link" href={PDF} target="_blank" rel="noopener noreferrer">
              RESUME
            </a>
          </div>
          <div>
            <a href="#contact-holder" onClick={e => handleNavClick(e, "#contact-holder")}>
              GET IN TOUCH
            </a>
          </div>
        </div>
        <span className="link-holder">
          {/* ./ */}
          <a href="#about-holder" onClick={e => handleNavClick(e, "#about-holder")}>
            ABOUT
          </a>
        </span>
        {/* <span className="link-holder">
            ./
            <a href="#my-skills">skills</a>
          </span> */}
        <span className="link-holder">
          {/* ./ */}
          <a href="#my-projects" onClick={e => handleNavClick(e, "#my-projects")}>
            WORK
          </a>
        </span>
        <span className="link-holder resume">
          {/* ./ */}
          <a id="resume-link" className="resume-link" href={PDF} target="_blank" rel="noopener noreferrer">
            RESUME
          </a>
        </span>
      </div>
      <span className="contact-link-holder">
        {/* ./ */}
        <a href="#contact-holder" onClick={e => handleNavClick(e, "#contact-holder")}>
          GET IN TOUCH
        </a>
      </span>
    </nav>
  );
};

export default Navbar;
