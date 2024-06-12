import Position from "./Position";
import useParticleAnimation from "../utils/draw";

const Hero = ({ scrollContainer }) => {
  const canvasRefLines = useParticleAnimation();

  return (
    <section>
      <div className="hero p-5 h-screen sm:top-[16%] flex flex-col justify-center items-center z-10 relative">
        <div className="flex justify-center ">
          <a
            href="https://github.com/kruizo"
            alt="Github Link"
            className="inline-flex items-center z-50 gap-x-2  text-[1rem] dark:text-slate-50 text-slate-800 p-1 ps-3 rounded-full transition"
          >
            Full Stack Web Developer
            <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>
        <div className="absolute -z-20">
          <canvas ref={canvasRefLines} id="canvas"></canvas>
        </div>
        <div className="lg:mb-20">
          <h1 className="text-start font-medium text-black  dark:text-white text-lg xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-xl leading-[110px] 2xl:leading-[160px]">
            Hi, I'm Ken<span className="text-secondary">.</span>
          </h1>
          <Position />
        </div>
      </div>
    </section>
  );
};

export default Hero;
