// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  lang: PropTypes.arrayOf(PropTypes.string).isRequired,
  showProject: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

function ProjectCard({ title, desc, images, link, lang, showProject, index }) {
  const [hovered, setHovered] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (hovered) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1500);
    }

    return () => clearInterval(interval);
  }, [hovered, images.length]);

  return (
    <a href={`${link}`} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="relative p-2 hover:z-10 hover:scale-105 transition-transform cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(null)}
        initial={{ scale: 0 }}
        animate={{ scale: showProject ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <img
          src={images[currentImageIndex]}
          className="h-72 w-full object-cover rounded-lg filter image-transition"
          alt={title}
        />
        <div
          className={`h-14 flex transition-all items-center gap-3 absolute top-1 right-2 z-50 text-right ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {lang.map((text, index) => (
            <img
              key={index}
              src={text}
              alt=""
              className="w-[30px] h-[110px] object-contain"
            />
          ))}
        </div>

        <div className="absolute inset-1 rounded-lg bg-black bg-opacity-50 hover:bg-opacity-0 transition-all duration-500 flex items-end text-white text-sm font-bold">
          <div className="relative rounded-lg text-container from-primary to-transparent h-1/2 bg-gradient-to-t bottom-0 p-5 flex flex-col justify-end w-full">
            <div
              className={`border-l h-12 ${
                hovered ? "opacity-0" : "opacity-100"
              } border-secondary absolute left-1 transition-all`}
            ></div>
            <div className="flex relative justify-between items-end ">
              <div
                className={`justify-between w-full  transition-opacity ${
                  hovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <h1 className="font-extrabold text-sm">{title}</h1>

                <p
                  className={`font-thin text-[1rem]  text-slate-50 text-ellipsis`}
                >
                  {desc}
                </p>
              </div>
              <div className="text-[2rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className={`w-10 h-10 mr-3 text-[200px] fill-secondary transition-all ${
                    hovered ? "opacity-100 scale-100" : "opacity-50 scale-50"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M24 13h-4v-9h-9v-4h13v13zm-24 11h13v-4h-9v-9h-4v13z" />
                </svg>
              </div>
              <span
                className={`absolute transition-opacity bottom-0  m-auto ${
                  hovered ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              >
                {currentImageIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
}

export default ProjectCard;
