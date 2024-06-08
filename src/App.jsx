import "./App.css";
import { useRef, useState, useEffect } from "react";
import {
  Contact,
  Navbar,
  Projects,
  Experience,
  Hero,
  About,
} from "./components/index";

function App() {
  const wrapperRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/src/utils/theme.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className={`main relative z-0 bg-white dark:bg-primary`}>
        <Navbar />
        <div className="wrapper" ref={wrapperRef}>
          <div id="hero" className="z-10">
            <Hero scrollContainer={wrapperRef} />
          </div>
        </div>
        <div id="about" className="relative z-30  mt-[-2px]">
          <About />
        </div>

        <div id="projects" className="relative z-30  mt-[-2px]">
          <Projects />
        </div>

        <div id="contact" className="relative z-30  mt-[-2px]">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
