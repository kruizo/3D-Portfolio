import React from "react";
import ComputersCanvas from "./Computer";
import useTypewriterAnimation from "../utils/type";

function About() {
  const canvasRef = useTypewriterAnimation();

  return (
    <section className="w-full h-full mx-auto pt-24 lg:py-36">
      <div className="block items-center h-full mx-16 justify-center xl:flex ">
        <div className="space-y-5 w-full lg:w-fit pr-0 sm:pr-24 xl:pr-0 xl:max-w-3xl xl:h-3/4 place-content-center ">
          <div>
            <h1 className="font-bold text-[45px] sm:text-md lg:text-lg text-black dark:text-white ">
              I create websites like this
              <span className="text-secondary">.</span>
            </h1>
            <p className="text-sm dark:text-slate-50 text-slate-800">
              I am Bob Kyneth Ruizo, specializing in JavaScript and TypeScript
              development. With expertise in web application and system
              creation, I leverage frameworks like Laravel and Next.js. My
              proficiency extends to various databases such as MySQL, Firebase,
              and MongoDB. As an ITS-certified professional in database
              management and HTML/CSS, I bring a comprehensive skill set to
              every project.
            </p>
            <div className="flex gap-4 py-5 my-5">
              <button
                type="button"
                className="bg-secondary z-20 text-slate-10 dark:text-white hover:text-black transition-colors hover:bg-white  py-3 px-5"
              >
                Download Resume
              </button>
              <button
                type="button"
                className="border z-50 border-black bg-white dark:border-white py-3 px-5 hover text-black dark:text-white dark:hover:text-secondary transition-colors hover:text-secondary hover:border-secondary"
              >
                View Certifications
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[20rem] lg:h-[25rem] -mt-32  xl:h-[35rem] relative flex items-center justify-center">
          <canvas ref={canvasRef} id="canvas" className="absolute -z-20" />
          <div className="absolute w-full h-3/4  z-10">
            <ComputersCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
