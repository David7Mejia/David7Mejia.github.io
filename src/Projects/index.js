import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Projects.css";
import nomadika from "../images/Nomadika.PNG";
import travlr from "../images/Travlr.PNG";
import oilflow from "../images/StackOilFLow.PNG";
import grammy from "../images/GrammyGram.PNG";
import ScrollReveal from "scrollreveal";
import chatUI from "../images/React-ChatUI.png";
import omniNexus from "../images/OMNI.png";

const Projects = () => {
  useEffect(() => {
    ScrollReveal().reveal(".project-holder", {
      delay: 200,
      reset: true,
    });
  }, []);

  return (
    <div className="my-projects" id="my-projects">
      <h1 className="about-me-intro" id="projects-intro">
        Work
      </h1>
      {/* <div className="project-blob-container"> */}
      {/* <div className="blob2"></div> */}
      <div className="project-holder" id="project-holder">
        <div className="project" id="chatUI">
          <p className="project-title">Omni Nexus</p>

          <div className="card-info">
            <div className="card-left">
              <a rel="noreferrer" href="https://omninexus.co" target="_blank">
                <img src={omniNexus} alt="omni-nexus" className="project-1" />
              </a>
              <div className="gh-link-holder">
                <a rel="noreferrer" href="https://www.omninexus.co" className="gh-link" target="_blank">
                  Website
                </a>
              </div>
            </div>

            <div className="card-right">
              <p className="project-desc">Omni Nexus LLC. Custom AI integration for SMBs. Agentic Generative LLM based AI flows that optimize internal processes. LangChain, Flowise, N8N.</p>
            </div>
          </div>
        </div>
        <div className="project" id="chatUI">
          <p className="project-title">React Chat UI</p>

          <div className="card-info">
            <div className="card-left">
              <a rel="noreferrer" href="https://nomadika.herokuapp.com/" target="_blank">
                <img src={chatUI} alt="react-chat-ui" className="project-1" />
              </a>
              <div className="gh-link-holder">
                <a rel="noreferrer" href="https://github.com/David7Mejia/react-AI-chat" className="gh-link" target="_blank">
                  GitHub
                </a>
              </div>
            </div>

            <div className="card-right">
              <p className="project-desc">A simple React + Vite based LLM Chat UI that connects to OpenAI and Gemini models. A Proof of Concept for larger projects.</p>
            </div>
          </div>
        </div>
        <div className="project" id="nomadika">
          <p className="project-title">Nomadika</p>

          <div className="card-info">
            <div className="card-left">
              <a rel="noreferrer" href="https://nomadika.herokuapp.com/" target="_blank">
                <img src={nomadika} alt="nomadika" className="project-1" />
              </a>
              <div className="gh-link-holder">
                <a rel="noreferrer" href="https://github.com/David7Mejia/Nomadika" className="gh-link" target="_blank">
                  GitHub
                </a>
              </div>
            </div>

            <div className="card-right">
              <p className="project-desc">
                A travel app MVP with a custom Neomorphic UI that provides real time venue information. Users can save venues of any city and interact with other users through a feed in that city.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="travlr">
          <p className="project-title">Travlr</p>
          <div className="card-info">
            <div className="card-left">
              <a rel="noreferrer" href="https://travlr-react.herokuapp.com/" target="_blank">
                <img src={travlr} alt="travlr" className="project-1" />
              </a>
              <div className="gh-link-holder">
                <a rel="noreferrer" href="https://github.com/David7Mejia/travlr-react" className="gh-link" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
            <div className="card-right">
              <p className="project-desc">
                A Flickr clone MVP where users have full CRUD functionality on posts and comments. Users can check out profiles and posts from other users through the social app.
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="grammy">
          <p className="project-title">GrammyGram</p>
          <div className="card-info">
            <div className="card-left">
              <a rel="noreferrer" href="https://instagrammygram.herokuapp.com/" target="_blank">
                <img src={grammy} alt="grammy" className="project-1" />
              </a>
              <div className="gh-link-holder">
                <a rel="noreferrer" href="https://github.com/anthonym313/GrammyGram" className="gh-link" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
            <div className="card-right">
              <p className="project-desc">
                A social media Instagram MVP inspired app where users have full CRUD functionality on posts and comments. Users can explore other artists and keep track of recent posts through a
                profile.
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="oilflow">
          <p className="project-title">Stack OilFlow</p>

          <div className="card-info">
            <div className="card-left">
              <a rel="noreferrer" href="https://stack-oil-flow.herokuapp.com/" target="_blank">
                <img src={oilflow} alt="oilflow" className="project-1" />
              </a>
              <div className="gh-link-holder">
                <a rel="noreferrer" href="https://github.com/tswieser/stack-Oilflow" className="gh-link" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
            <div className="card-right">
              <p className="project-desc">A Stack Overflow clone MVP where users can create & answer questions, search questons asked, and upvote/downvote answers for their automotive needs.</p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default Projects;
