import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollReveal from "scrollreveal";
import StaticMenu from "./StaticMenu";

import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="top-holder">
          <Navbar />
          <div className="blob"> </div>

          {/* <StaticMenu /> */}
          <Landing />
          <About />
          {/* <Skills /> */}
          <Projects />
          <Contact />
          <Footer />
        </div>
        {/* <Routes><Route path='/' element={<Navbar/>} /></Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
