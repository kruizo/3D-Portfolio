import { useEffect, useRef, useState } from "react";

const useTypewriterAnimation = (
  maxTexts = 1,
  textDuration = 250,
  typingSpeed = 2
) => {
  const canvasRef = useRef(null);

  const [localtheme, setLocalTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const handleThemeChange = () => {
      setLocalTheme(localStorage.getItem("theme"));
      localStorage.getItem("theme", localtheme);
    };

    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;

    const updateCanvasDimensions = () => {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    updateCanvasDimensions();
    window.addEventListener("resize", updateCanvasDimensions);

    const texts = [
      "Made with Three JS 🔥",
      "Design and be real. ",
      "VIsit my github.🚀⭐  ",
      "Reach me on my socials 📱",
      "🔥🔥🔥🔥 ",
      "Welcome 👋",
    ];

    const particlesArray = [];
    const activeTexts = new Set();

    class TextParticle {
      constructor(text, x, y, delay) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.delay = delay; // Delay before start to type
        this.index = 0;
        this.opacity = 1;
        this.life = 0;
        this.started = false;
        this.cursorBlink = 0;
        this.typingSpeed = typingSpeed; // Typing speed
        this.typingTick = 0;
      }

      draw() {
        const isDark = localtheme === "dark";
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${this.opacity})`
          : `rgba(0, 0, 0, ${this.opacity})`;
        ctx.font = "25px Courier New";
        ctx.fillText(this.text.slice(0, this.index), this.x, this.y);

        //cursor
        if (this.started) {
          ctx.fillStyle = `rgba(255, 81, 47, ${this.opacity})`;
          if (this.cursorBlink % 60 < 30) {
            ctx.fillRect(this.x + this.index * 15, this.y - 18, 10, 20);
          }
        }
      }

      update() {
        if (this.delay > 0) {
          this.delay--;
          return;
        }

        this.started = true;
        this.cursorBlink++;

        if (this.index < this.text.length) {
          this.typingTick++;
          if (this.typingTick % this.typingSpeed === 0) {
            this.index++;
          }
        } else {
          this.life++;
          if (this.life > textDuration) {
            this.opacity -= 0.02;
          }
          if (this.opacity <= 0) {
            activeTexts.delete(this.text);
            this.reset();
          }
        }
        this.draw();
      }

      reset() {
        this.index = 0;
        this.opacity = 1;
        this.life = 0;
        this.started = false;
        this.cursorBlink = 0;
        this.typingTick = 0;
        const { x, y } = getRandomPosition();
        this.x = x;
        this.y = y;

        let newText;
        do {
          newText = texts[Math.floor(Math.random() * texts.length)];
        } while (activeTexts.has(newText));
        this.text = newText;
        activeTexts.add(newText);

        this.delay = Math.floor(Math.random() * 100);
      }
    }

    function getRandomPosition() {
      const x = Math.random() * (canvas.width - 300);
      const y = Math.random() * (canvas.height - 200);
      return { x, y };
    }

    function init() {
      particlesArray.length = 0;
      activeTexts.clear();
      for (let i = 0; i < maxTexts; i++) {
        const { x, y } = getRandomPosition();
        let text;
        do {
          text = texts[Math.floor(Math.random() * texts.length)];
        } while (activeTexts.has(text));
        activeTexts.add(text);
        const delay = Math.floor(Math.random() * 100); // Random delay before starting to type
        particlesArray.push(new TextParticle(text, x, y, delay));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw all particles
      particlesArray.forEach((particle) => particle.update());

      // Remove fully faded particles
      for (let i = particlesArray.length - 1; i >= 0; i--) {
        if (particlesArray[i].opacity <= 0) {
          particlesArray.splice(i, 1);
        }
      }

      // Add new particles if needed
      while (particlesArray.length < maxTexts) {
        const { x, y } = getRandomPosition();
        let text;
        do {
          text = texts[Math.floor(Math.random() * texts.length)];
        } while (activeTexts.has(text));
        activeTexts.add(text);
        const delay = Math.floor(Math.random() * 100); // Random delay before starting to type
        particlesArray.push(new TextParticle(text, x, y, delay));
      }
    }

    window.addEventListener("resize", updateCanvasDimensions);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
    };
  }, [maxTexts, textDuration, typingSpeed, localtheme]);

  return canvasRef;
};

export default useTypewriterAnimation;
