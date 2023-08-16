import React from "react";
import { Link } from "react-router-dom";
import PDF from "../assets/DM_Resume.pdf";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar" id="navbar">
            <div className="logo-holder">
                <a href="#landing-holder" className="navbar-logo">
                    David Mejia
                </a>
            </div>
            <div className="page-links">
                <span className="link-holder">
                    {/* ./ */}
                    <a href="#about-holder">about</a>
                </span>
                {/* <span className="link-holder">
            ./
            <a href="#my-skills">skills</a>
          </span> */}
                <span className="link-holder">
                    {/* ./ */}
                    <a href="#my-projects">projects</a>
                </span>
                {/* <span className="link-holder">
            ./
            <a href="#contact-holder">contact</a>
          </span> */}
                <span className="link-holder resume">
                    {/* ./ */}
                    <a
                        id="resume-link"
                        className="resume-link"
                        href={PDF}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        resume
                    </a>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
