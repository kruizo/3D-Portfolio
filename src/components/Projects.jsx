// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { projects } from "../data";
import { textVariant } from "../utils/motion";
import { ProjectCard } from "./index";
import { motion } from "framer-motion";
import { MotionWrapper } from "../hoc";

function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const [showProjects, setShowProjects] = useState(true);

  const tags = ["All", "Web Development", "Andriod", "Designs", "Systems"];

  const handleTagClick = (tag) => {
    if (tag !== activeTag) {
      setShowProjects(false);
      setActiveTag(tag === activeTag ? "All" : tag);

      setTimeout(() => {
        setShowProjects(true);
      }, 100);
    }
  };

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  return (
    <section>
      <div className="min-h-screen flex flex-col gap-10 md:justify-center md:items-center p-6 sm:pr-36 md:pr-20">
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
          <motion.div className="relative w-full md:grid grid-cols-2 grid-rows-2">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                title={project.name}
                desc={project.description}
                key={index}
                images={project.image}
                link={project.url}
                tags={project.tags}
                lang={project.text}
                showProject={showProjects}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MotionWrapper(Projects, "projects");
