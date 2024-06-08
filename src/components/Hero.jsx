import Position from "./Position";
import useParticleAnimation from "../utils/draw";

const Hero = ({ scrollContainer }) => {
  const canvasRefLines = useParticleAnimation();

  return (
    <section>
      <div className="hero p-5 h-screen sm:top-[16%] flex justify-center items-center z-30 relative">
        <div className="absolute -z-20">
          <canvas ref={canvasRefLines} id="canvas"></canvas>
        </div>
        <div className="lg:mb-20">
          <h1 className="text-start font-medium text-black  dark:text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-xl leading-[110px] 2xl:leading-[160px]">
            Hi, I'm Ken<span className="text-secondary">.</span>
          </h1>
          <Position />
        </div>
      </div>
    </section>
  );
};

export default Hero;
