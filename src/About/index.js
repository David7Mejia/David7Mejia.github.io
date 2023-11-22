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
            <div className="about-me-intro" id="about-me-intro">
                About
            </div>
            <div className="about-section-container">
                <p className="about-me">
                    I'm an <span>ambitious</span> and <span>passionate</span>{" "}
                    Software Engineer with an entrepreneurial mindset. I enjoy
                    exploring the possibilities of technology and software. I have experience
                    helping businesses integrate solutions towards their vision
                    and growth, working as a{" "}
                    <span>Full-Stack Software Engineer</span>,{" "}
                    <span>Project Manager</span> and{" "}
                    <span>Engineering Lead</span>.
                    <br />
                    My favorite programming languages include
                    <span> JavaScript</span> and <span>Python</span>. I love to
                    experiment with TensorFlow, PyTorch, and A.I. models. Topics
                    I enjoy exploring are: AI, Genetics, Business and Quantum
                    Computing.
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
                    <div>Docker</div>
                    <div>D3.js</div>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>SCSS/SASS</div>
                    <div>BeautifulSoup</div>
                    <div>AWS Administration</div>
                    <div>Heroku</div>
                    <div>CircleCI</div>
                </div>
            </div>
        </div>
    );
};

export default About;
