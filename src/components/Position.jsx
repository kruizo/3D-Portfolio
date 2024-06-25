import React from "react";

const produceSpans = (text, animation, color) => {
  const words = text.split(" ");
  const firstWordLength = words[0].length;
  const secondWordStartIndex = firstWordLength + 1;

  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom  opacity-0 ${animation} ${
        index >= secondWordStartIndex ? color : ""
      }`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-black dark:text-white text-base md:text-[36px] 2xl:text-lg leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center">
      <div className="absolute inset-0 top-[-30px] sm:top-[-10px] lg:top-0 flex flex-col">
        <div
          className="text second absolute flex"
          aria-label="A computer science student"
        >
          {produceSpans(
            "computer science",
            "animate-textRotate1",
            "text-[#ff512f]"
          )}
        </div>
        <div
          className="text first absolute flex"
          aria-label="aspiring developer"
        >
          {produceSpans(
            "web developer",
            "animate-textRotate2",
            "text-[#ff512f]"
          )}
        </div>
      </div>
    </div>
  );
};

export default Position;
