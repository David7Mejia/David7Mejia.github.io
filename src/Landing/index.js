import React from "react";
import { useEffect, useRef } from "react";
import "./Landing.css";
// import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

const Landing = () => {
  // useEffect(() => {
  //   ScrollReveal().reveal("#landing-holder", { delay: 500, reset:true });
  // }, [])

  const el = useRef(null);
  const typed = useRef(null);
  const options = {
    strings: [
      "Hello!",
      "Hola!",
      "Olá!",
      "Bonjour!",
      "Ciao!",
      "Hallo!",
      "Salut!",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  };

  useEffect(() => {
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="landing-holder" id="landing-holder">
      <div className="landing">
        <div className="align-intro">
          <div className="animation-holder">
            <span className="greeting-animation" ref={el} />
          </div>
          <p className="my-intro">
            My name is <span className="my-name">David</span>.
            <br />
            I'm a <span className="my-role">Full-Stack SWE</span>.
            <p className="intro-talk">
              I have a passion for new tech, photography, and travel!
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
