import React, { useState } from "react";
import ComputersCanvas from "./Computer";
import useTypewriterAnimation from "../utils/type";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { MotionWrapper } from "../hoc";
import Certifications from "./Certifications";

function About() {
  const [activeSection, setActiveSection] = useState("about");
  const canvasRef = useTypewriterAnimation();

  const handleViewCertifications = () => {
    setActiveSection("certifications");
  };

  const handleGoBack = () => {
    setActiveSection("about");
  };

  return (
    <section className="w-full h-full lg:min-h-screen flex flex-col justify-center mx-auto pt-24 lg:py-36 overflow-x-hidden">
      <div className="block items-center h-full mx-16 justify-center xl:flex ">
        <motion.div
          className={`space-y-5 w-full lg:w-fit pr-0 sm:pr-24 xl:pr-0 xl:max-w-3xl xl:h-3/4 place-content-center ${
            activeSection === "about" ? "block" : "hidden"
          }`}
          initial={{ x: 0, opacity: 1 }}
          animate={{
            x: activeSection === "about" ? 0 : -1000,
            opacity: activeSection === "about" ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        >
          <motion.div variants={textVariant()}>
            <h1 className="font-bold text-[45px] sm:text-md lg:text-lg text-black dark:text-white ">
              I create websites like this
              <span className="text-secondary">.</span>
              {/* Dream Big
              <span className="text-secondary">.</span>
              <br />
              Design More
              <span className="text-secondary">.</span>
              <br />
              Achieve Anything
              <span className="text-secondary">.</span> */}
            </h1>
          </motion.div>
          <p className="text-sm dark:text-slate-50 text-slate-800">
            I am Bob Kyneth Ruizo, specializing in JavaScript and TypeScript
            development. With expertise in web application and system creation,
            I leverage frameworks like Laravel and Next.js. My proficiency
            extends to various databases such as MySQL, Firebase, and MongoDB.
            As an ITS-certified professional in database management and
            HTML/CSS, I bring a comprehensive skill set to every project.
          </p>
          <div className="flex gap-4 py-5 my-5">
            <button
              type="button"
              className="bg-secondary z-20 text-slate-10 dark:text-white hover:text-black hover:dark:text-black transition-colors hover:bg-white py-3 px-5"
            >
              Download Resume
            </button>
            <button
              type="button"
              className="border z-50 border-black dark:border-white py-3 px-5 hover text-black dark:text-white hover:dark:border-secondary dark:hover:text-secondary transition-colors hover:text-secondary hover:border-secondary"
              onClick={handleViewCertifications}
            >
              View Certifications
            </button>
          </div>
        </motion.div>

        <motion.div
          className={`w-full h-[20rem] lg:h-[25rem] -mt-32 xl:h-[35rem] relative flex items-center justify-center ${
            activeSection === "about" ? "block" : "hidden"
          }`}
          initial={{ x: 0, opacity: 1 }}
          animate={{
            x: activeSection === "about" ? 0 : -1000,
            opacity: activeSection === "about" ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <canvas ref={canvasRef} id="canvas" className="absolute -z-20 " />
          <div className="absolute w-full h-3/4 z-10">
            <ComputersCanvas />
          </div>
        </motion.div>
      </div>

      {activeSection === "certifications" && (
        <motion.div
          className="w-full"
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Certifications onGoBack={handleGoBack} />
        </motion.div>
      )}
    </section>
  );
}

export default MotionWrapper(About, "about");
