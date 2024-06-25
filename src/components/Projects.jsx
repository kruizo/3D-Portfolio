import React, { useState, useEffect } from "react";
import { projects } from "../data";
import Blob from "./Blob";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { MotionWrapper } from "../hoc";

function Projects() {
  const [hovered, setHovered] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTag, setActiveTag] = useState("All");
  const [showProjects, setShowProjects] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hovered) {
        setCurrentImageIndex(Math.floor(Math.random() * hovered.image.length));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [hovered]);

  const tags = ["All", "Web Development", "Andriod", "Designs", "Systems"];

  const handleTagClick = (tag) => {
    if (tag !== activeTag) {
      setShowProjects(false); // Trigger exit animation
      setActiveTag(tag === activeTag ? "All" : tag);

      setTimeout(() => {
        setShowProjects(true); // Trigger fade in animation after state update
      }, 100); // Adjust this timing to match your exit animation duration
    }
  };

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  return (
    <section>
      <div className="min-h-screen flex flex-col gap-10 md:justify-center md:items-center p-6">
        <motion.div variants={textVariant()}>
          <h1 className="font-bold text-[45px] sm:text-md lg:text-lg text-black dark:text-white">
            Projects
            <span className="text-secondary">.</span>
          </h1>
        </motion.div>

        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <div
              key={tag}
              className={`relative grid select-none items-center whitespace-nowrap rounded-lg ${
                tag === activeTag
                  ? "bg-secondary text-white"
                  : "border border-gray-900 text-gray-700"
              } py-1.5 px-3 font-sans text-xs font-bold uppercase cursor-pointer`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex w-full md:w-4/5 justify-center">
          <motion.div className="relative w-full md:grid grid-cols-2 grid-rows-2 ">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative p-2 hover:z-10 hover:scale-105 transition-transform"
                onMouseEnter={() => setHovered(project)}
                onMouseLeave={() => setHovered(null)}
                initial={{ scale: 0 }}
                animate={{ scale: showProjects ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <img
                  src={project.image[0]} // Assuming you want to display the first image
                  className="h-72 w-full object-cover rounded-lg filter image-transition"
                  alt={project.name}
                />
                <div className="absolute inset-1 rounded-lg bg-black bg-opacity-50 hover:bg-opacity-0 transition-all duration-500 flex items-end text-white text-sm font-bold">
                  <div className="relative rounded-lg text-container from-primary to-transparent h-1/2 bg-gradient-to-t bottom-0 p-5 flex flex-col justify-end w-full">
                    <div
                      className={`border-l h-12 ${
                        hovered && hovered.name === project.name && "border-l-4"
                      } border-secondary absolute left-1 transition-all`}
                    ></div>
                    <div className="flex justify-between items-end">
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
                          <p className={`font-thin text-[1rem] text-slate-50`}>
                            {project.description}
                          </p>
                        )}
                      </div>
                      <div className="text-end h-fit">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MotionWrapper(Projects, "projects");
