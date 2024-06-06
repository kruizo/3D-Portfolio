import React from "react";
import { cardImages } from "../data";

function Projects() {
  return (
    <section id="portfolio">
      <div className="h-screen flex justify-center items-center">
        <div className="relative flex gap-5 justify-between h-1/2">
          {cardImages.map((image, key) => (
            <div className="card w-40 h-full ">
              <img
                key={key}
                src={image.url}
                alt={`Card ${key + 1}`}
                className=" h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
