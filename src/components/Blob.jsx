import React from "react";

function getRandomDelayInSeconds() {
  const randomDelay = Math.random() * 2 + 1;
}

const Blob = ({ position, color, width, height, filled }) => {
  const delayInSeconds = getRandomDelayInSeconds();
  return (
    <div
      className={`blob -z-50 ${position} ${width} delay-${delayInSeconds} animate-spin delay ${height} border-${color} ${
        filled ? `bg-${color}` : ""
      }`}
    ></div>
  );
};

export default Blob;
