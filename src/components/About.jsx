import React from "react";
import ComputersCanvas from "./Computer";
import useTypewriterAnimation from "../utils/type";

function About() {
  const canvasRef = useTypewriterAnimation();

  return (
    <section className="w-full h-full mx-auto">
      <div className="block items-center h-full m-16 justify-center xl:flex ">
        <div className="space-y-5 w-fit xl:max-w-3xl xl:h-3/4 place-content-center ">
          <div>
            <h1 className="text-lg font-bold text-black dark:text-white ">
              I create websites like this
              <span className="text-secondary">.</span>
            </h1>
            <p className="text-sm dark:text-slate-200 text-slate-800">
              I am Bob Kyneth Ruizo, specializing in JavaScript and TypeScript
              development. With expertise in web application and system
              creation, I leverage frameworks like Laravel and Next.js. My
              proficiency extends to various databases such as MySQL, Firebase,
              and MongoDB. As an ITS-certified professional in database
              management and HTML/CSS, I bring a comprehensive skill set to
              every project.
            </p>
          </div>
        </div>
        <div className="w-full h-[50rem]  relative flex items-center justify-center">
          <canvas ref={canvasRef} id="canvas" className="absolute z-20 " />
          <div className="absolute w-full h-3/4 z-30">
            <ComputersCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
