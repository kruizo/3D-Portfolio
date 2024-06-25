import React, { useState, useEffect } from "react";
import { projects } from "../data";
import Blob from "./Blob";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { MotionWrapper } from "../hoc";

function Projects() {
  const [hovered, setHovered] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const colors = ["red", "green", "blue", "yellow"];

  useEffect(() => {
    const interval = setInterval(() => {
      if (hovered) {
        setCurrentImageIndex(Math.floor(Math.random() * hovered.image.length));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <section>
      <div className="min-h-screen flex flex-col gap-4 md:justify-center md:items-center p-6">
        <motion.div variants={textVariant()}>
          <h1 className="font-bold text-[45px] sm:text-md lg:text-lg text-black dark:text-white mb-8">
            Projects
            <span className="text-secondary">.</span>
          </h1>
        </motion.div>

        <div className="flex w-full md:w-4/5 justify-center">
          <div className="relative w-full ">
            {projects.reduce((acc, project, index) => {
              if (index % 2 === 0) {
                acc.push(
                  <div className="relative block mr-4 md:flex" key={index}>
                    {projects
                      .slice(index, index + 2)
                      .map((project, innerIndex) => (
                        <div
                          className="relative p-2 w-full hover:z-10 hover:scale-105 transition-transform"
                          key={innerIndex}
                          onMouseEnter={() => {
                            setHovered(project);
                          }}
                          onMouseLeave={() => setHovered(null)}
                        >
                          <img
                            src={project.image[0]}
                            className="h-72 w-full object-cover rounded-lg filter image-transition"
                            alt=""
                          />
                          <div className="absolute rounded-lg inset-2 bg-black bg-opacity-50 hover:bg-opacity-0 transition-all duration-500 flex items-end text-white text-sm font-bold">
                            <div
                              className={`relative rounded-lg text-container  from-primary to-transparent h-1/2 bg-gradient-to-t bottom-0 p-5 flex flex-col justify-end w-full `}
                            >
                              <div
                                className={`border-l h-12 ${
                                  hovered &&
                                  hovered.name === project.name &&
                                  "border-l-4"
                                } border-secondary absolute left-1 transition-all`}
                              ></div>
                              <div className="flex justify-between">
                                <div className="justify-between">
                                  <h1 className="font-extrabold text-sm">
                                    {project.name}
                                  </h1>

                                  {hovered && hovered.name === project.name ? (
                                    <a
                                      href={project.url}
                                      className="text-[1rem] font-thin"
                                    >
                                      {project.url}
                                    </a>
                                  ) : (
                                    <p
                                      className={`font-thin text-[1rem] text-slate-50`}
                                    >
                                      {project.description}
                                    </p>
                                  )}
                                </div>
                                <div className="text-end">
                                  {project.text.map((text, index) => (
                                    <span
                                      className={`w-[15rem] text-[.8rem] text-slate-50 z-30`}
                                      key={index}
                                    >
                                      #{text}{" "}
                                    </span>
                                  ))}
                                </div>
                              </div>
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
