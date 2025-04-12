import { React, useEffect } from "react";
import "./About.css";
import ScrollReveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal(".about-me, .tech-stack-container", {
      delay: 200,
      reset: true,
    });
  }, []);

  return (
    <div className="about-holder" id="about-holder">
      <h1 className="about-me-intro" id="about-me-intro">
        ABOUT
      </h1>
      <div className="about-section-container">
        <p className="about-me">
          Passionate for delivering business solutions through technology. As a Full-Stack engineer I enjoy exploring the challenges and possibilities of integrating software for real world
          applications. I have experience helping businesses integrate solutions towards their vision and growth, working as a <span>Full-Stack Software Engineer</span>, <span>Project Manager</span>{" "}
          and <span>Engineering Lead</span>.
        </p>
        <div className="tech-stack-container">
          <div>JavaScript</div>
          <div>Python</div>
          <div>React</div>
          <div>Nextjs</div>
          <div>Django</div>
          <div>REST API's'</div>
          <div>React Native</div>
          <div>Tensorflow</div>
          <div>Pytorch</div>
          <div>TypeScript</div>
          <div>PostgreSQL</div>
          <div>MongoDB</div>
          <div>JQuery</div>
          <div>Redux</div>
          <div>Nodejs</div>
          <div>Flask</div>
          <div>Sequelize</div>
          <div>GraphQL</div>
          <div>Shopify - Hydrogen H2</div>
          <div>Docker</div>
          <div>D3.js</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>SCSS/SASS</div>
          <div>BeautifulSoup</div>
          <div>AWS Administration</div>
          <div>Heroku</div>
          <div>CircleCI</div>
          <div>Flowise</div>
          <div>LangChain</div>
          <div>LangGraph</div>
          <div>GenAI Integration</div>
        </div>
      </div>
    </div>
  );
};

export default About;
