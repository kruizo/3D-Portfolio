import React, { useState } from "react";
import { skills } from "../data";
import HexagonalProgress from "./HexagonalProgress";
import { MotionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
function Skills() {
  const columns = [4, 5, 4];
  const honeycombRows = [];

  let startIndex = 0;
  columns.forEach((numCols) => {
    const row = skills.slice(startIndex, startIndex + numCols);
    honeycombRows.push(row);
    startIndex += numCols;
  });

  const [hoveredCell, setHoveredCell] = useState(null);

  return (
    <section className="w-full h-screen flex justify-center items-center px-16">
      <div>
        <div className="mb-10 xl:pr-0">
          <motion.div variants={textVariant()}>
            <h1 className="text-lg xl:text-center font-bold text-black dark:text-white ">
              Skills and Tools
              <span className="text-secondary">.</span>
            </h1>
          </motion.div>
        </div>

        <div className="z-50 w-full">
          <div className="xl:block lg:pr-24 xl:pr-0 max-w-[60rem] lg:h-[10rem] lg:block">
            {hoveredCell != null ? (
              <p className="tooltip text-sm dark:text-slate-200 text-slate-800 ">
                {hoveredCell.description}
              </p>
            ) : (
              <p className="text-sm dark:text-slate-200 text-slate-800 ">
                I'm adept in HTML, CSS, and JavaScript, building strong
                foundations for web projects. Utilizing React and Next.js, I
                create sleek and interactive user interfaces. With Node.js and
                MySQL, I handle backend operations seamlessly. Additionally, I
                excel in Firebase for real-time database management and
                deployment. My focus on user experience and innovation ensures
                that each project meets high standards and exceeds expectations.
              </p>
            )}
          </div>

          <div className="honeycomb">
            {honeycombRows.map((row, rowIndex) => (
              <div key={rowIndex}>
                {row.map((skill, index) => (
                  <Tilt key={index} onMouseEnter={() => setHoveredCell(skill)}>
                    <motion.div
                      variants={fadeIn("right", "spring", 0.5 * index, 0.25)}
                      className="cell bg-gray-200 relative z-50 "
                    >
                      {hoveredCell && hoveredCell.name === skill.name ? (
                        <div className="progress-overlay text-center flex flex-col justify-center items-center w-20 h-20">
                          <div className="font-bold text-secondary">
                            {skill.name}
                          </div>{" "}
                          <div>{(skill.progress * 100).toFixed(2)}%</div>
                        </div>
                      ) : (
                        <img src={skill.image} alt={skill.name} />
                      )}

                      <HexagonalProgress progress={skill.progress} />
                    </motion.div>
                  </Tilt>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MotionWrapper(Skills, "skills");
