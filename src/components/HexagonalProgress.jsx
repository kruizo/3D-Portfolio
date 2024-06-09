import React, { useState, useEffect } from "react";

const HexagonalProgress = ({ progress }) => {
  const sideLength = 50; // Length of each side of the hexagon
  const height = Math.sqrt(3) * sideLength * 2; // Height of the hexagon
  const width = sideLength * 2; // Width of the hexagon
  const perimeter = 6 * sideLength; // Calculate the perimeter of the hexagon

  const [progressValue, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let currentProgress = 0;

    const animate = () => {
      if (currentProgress < progress) {
        currentProgress += 0.01; // Adjust the speed of animation by changing this value
        setProgress(currentProgress);
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [progress]);

  // Calculate the dash offset based on the progressValue instead of progress directly
  const dashOffset = perimeter * (1 - progressValue);

  return (
    <svg
      className="progress-hexagon stroke-secondary absolute m-auto -bottom-16 top-0"
      width={width}
      height={height}
    >
      <polygon
        className="progress-hexagon-polygon"
        fill="transparent"
        strokeWidth="5"
        points={`${sideLength},0 ${sideLength * 2},${sideLength * 0.55} ${
          sideLength * 2
        },${sideLength * 1.6} ${sideLength},${sideLength * 2.2} 0,${
          sideLength * 1.6
        } 0,${sideLength * 0.55}`}
        style={{
          strokeDasharray: perimeter,
          strokeDashoffset: dashOffset,
        }}
      />
    </svg>
  );
};

export default React.memo(HexagonalProgress);
