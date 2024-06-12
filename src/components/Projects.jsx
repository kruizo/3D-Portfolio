import React from "react";
import { placeholder } from "../assets/images";
import { useState } from "react";
import { projects } from "../data";
import Blob from "./Blob";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { MotionWrapper } from "../hoc";

function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative">
      <Blob
        color={"secondary"}
        position={"-left-[60px] -top-40"}
        width={"w-[200px]"}
        height={"h-[200px]"}
      />
      <div className="min-h-screen flex flex-col gap-4 justify-center items-center p-16">
        <motion.div variants={textVariant()}>
          <h1 className="font-bold text-[45px] sm:text-md lg:text-lg text-black dark:text-white mb-8">
            Projects
            <span className="text-secondary">.</span>
          </h1>
        </motion.div>

        <div className="flex w-4/5 justify-center">
          <div className="relative w-full ">
            {projects.reduce((acc, project, index) => {
              if (index % 2 === 0) {
                acc.push(
                  <div className="relative flex" key={index}>
                    {projects
                      .slice(index, index + 2)
                      .map((project, innerIndex) => (
                        <div
                          className="relative p-2 w-full hover:z-50 hover:scale-105 transition-transform"
                          key={innerIndex}
                          onMouseEnter={() => setHovered(project)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          <img
                            src={placeholder}
                            className="h-72 w-full object-cover rounded-lg filter"
                            alt=""
                          />
                          <div className="absolute inset-2 bg-black bg-opacity-50 hover:bg-opacity-0 transition-all duration-500 flex items-end text-white text-sm font-bold">
                            <div
                              className={`relative text-container  from-primary to-transparent h-1/2 bg-gradient-to-t bottom-0 p-5 flex flex-col justify-end w-full `}
                            >
                              <div
                                className={`border-l z-50 h-12 ${
                                  hovered &&
                                  hovered.name === project.name &&
                                  "border-l-4"
                                } border-secondary absolute left-1 transition-all`}
                              ></div>
                              <h1 className="font-extrabold text-sm">
                                {project.name}
                              </h1>
                              <p
                                className={`font-thin text-[1rem] text-slate-50`}
                              >
                                {hovered && hovered.name === project.name
                                  ? project.url
                                  : project.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                );
              }
              return acc;
            }, [])}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MotionWrapper(Projects, "projects");
