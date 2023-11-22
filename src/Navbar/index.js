import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PDF from "../assets/DM_Resume.pdf";
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

  return (
    <nav
      className={cn("navbar", {
        has_scrolled: position !== 0,
      })}
      id="navbar"
    >
      <div className="logo-holder">
        <a href="#landing-holder" className="navbar-logo">
          David Mejia
        </a>
      </div>
      <div className="page-links">
        <div
          className={cn("hamburger", {
            is_open: isOpen,
          })}
          onClick={handleClick}
        ></div>
        <div className={cn("ham-nav", {
          open_ham: isOpen
        })}>
          <div>
            <a href="#about-holder">ABOUT</a>
          </div>
          <div>
            <a href="#my-projects">WORK</a>
          </div>
          <div>
            <a href="#contact-holder">CONTACT</a>
          </div>
          <div>
            <a id="resume-link" className="resume-link" href={PDF} target="_blank" rel="noopener noreferrer">
              RESUME
            </a>
          </div>
        </div>
        <span className="link-holder">
          {/* ./ */}
          <a href="#about-holder">ABOUT</a>
        </span>
        {/* <span className="link-holder">
            ./
            <a href="#my-skills">skills</a>
          </span> */}
        <span className="link-holder">
          {/* ./ */}
          <a href="#my-projects">WORK</a>
        </span>
        <span className="link-holder">
          {/* ./ */}
          <a href="#contact-holder">CONTACT</a>
        </span>
        <span className="link-holder resume">
          {/* ./ */}
          <a id="resume-link" className="resume-link" href={PDF} target="_blank" rel="noopener noreferrer">
            RESUME
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
