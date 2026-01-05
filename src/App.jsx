import "./App.css";
import React from "react";
import { useRef, useEffect } from "react";
import {
  Contact,
  Navbar,
  Projects,
  Skills,
  Hero,
  About,
  Footer,
} from "./components/index";
import StarsCanvas from "./components/canvas/Stars";

function App() {
  const wrapperRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/theme.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className={`main z-0 bg-white dark:bg-primary`}>
        <Navbar />
        <div className="wrapper" ref={wrapperRef}>
          <div id="hero" className="z-30">
            <Hero scrollContainer={wrapperRef} />
          </div>
        </div>
        <div className="relative z-0">
          <StarsCanvas />
          <div id="about" className="relative z-30 ">
            <About />
          </div>
          <div id="skills" className="relative z-30  ">
            <Skills />
          </div>
          <div id="projects" className="relative z-30 ">
            <Projects />
          </div>
          <div id="contact" className="relative z-30 ">
            <Contact />
          </div>
          <div className="relative z-30 ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
