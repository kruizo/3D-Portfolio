import React, { useEffect, useState } from "react";
import { skills } from "../data";
import HexagonalProgress from "./HexagonalProgress";
import { MotionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import Blob from "./Blob";

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full min-h-screen flex justify-center items-center p-10 lg:pr-20">
      <div className="space-y-5 w-full lg:w-fit pr-0 sm:pr-24 xl:pr-0 xl:w-3/4">
        <div className="mb-10">
          <motion.div variants={textVariant()}>
            <h1 className="text-lg xl:text-center font-bold text-black dark:text-white ">
              Skills and Tools
              <span className="text-secondary">.</span>
            </h1>
          </motion.div>
        </div>

        <div className="z-50 w-full ">
          <div className="pr-0 text-[1rem]  xl:pr-0 w-full h-[10rem]  md:h-[8rem] lg:block">
            {hoveredCell != null ? (
              <p className="pr-0 dark:text-slate-50 text-slate-800">
                {hoveredCell.description}
              </p>
            ) : (
              <p className="dark:text-slate-50 text-slate-800">
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
          {isMobile && (
            <div className="flex mt-16 flex-wrap gap-5 w-full ">
              {skills.map((skill, index) => (
                <div key={index} className="w-full">
                  <Tilt
                    className="w-full h-full"
                    options={{ scale: 1.1, max: 30 }}
                    onMouseEnter={() => setHoveredCell(skill)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-4 shadow-lg dark:shadow-none dark:bg-slate-800 flex justify-between  items-center rounded-lg h-full relative"
                    >
                      <div className="text-[10px] font-bold text-black dark:text-white">
                        {skill.name}
                      </div>
                      <div className="text-xs text-secondary">
                        {(skill.progress * 100).toFixed(2)}%
                      </div>
                      <div
                        className="absolute bottom-0 left-0 bg-secondary"
                        style={{
                          width: `${skill.progress * 100}%`,
                          height: "2px",
                        }}
                      />
                    </motion.div>
                  </Tilt>
                </div>
              ))}
            </div>
          )}

          <div className={` honeycomb  ${isMobile ? "hidden" : "nlock"}`}>
            {honeycombRows.map((row, rowIndex) => (
              <div key={rowIndex}>
                {row.map((skill, index) => (
                  <Tilt
                    options={{ scale: 1.1, max: 60 }}
                    key={index}
                    onMouseEnter={() => setHoveredCell(skill)}
                  >
                    <motion.div
                      variants={fadeIn("right", "spring", 0.5 * index, 0.25)}
                      className="cell bg-gray-200 relative z-40  "
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
