import React from 'react';
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
import "./index.css";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Landing />
        <About />
        {/* <Skills /> */}
        <Projects />
        {/* <Contact /> */}
        <Footer />
        <Routes>{/* <Route path='/' element={<Navbar/>} /> */}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
