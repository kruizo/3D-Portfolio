import Position from "./Position";
import useParticleAnimation from "../utils/draw";

const Hero = ({ scrollContainer }) => {
  const canvasRef = useParticleAnimation();

  return (
    <section>
      <div className="hero p-5 h-screen sm:top-[16%] flex justify-center items-center z-30 relative bg-[url('../3d/bg.jpg')]">
        <div className="lg:mb-20">
          <h1 className="text-start font-medium text-black  dark:text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[100px] leading-[110px] 2xl:leading-[160px]">
            Hi, I'm Ken<span className="text-secondary">.</span>
          </h1>
          <Position />
        </div>
        <div className="absolute">
          <canvas ref={canvasRef} id="canvas"></canvas>
          {/* <div className="absolute bottom-0 left-0 h-full w-1/2 ">
          <PoleCanvas />
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
