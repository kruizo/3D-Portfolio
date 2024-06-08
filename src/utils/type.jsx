import { useEffect, useRef } from "react";

const useTypewriterAnimation = (
  maxTexts = 1,
  textDuration = 300,
  typingSpeed = 10
) => {
  const canvasRef = useRef(null);
  var localtheme = localStorage.getItem("theme");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;

    const updateCanvasDimensions = () => {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      canvas.style.width = `${parent.offsetWidth}px`;
      canvas.style.height = `${parent.offsetHeight}px`;
    };

    updateCanvasDimensions();
    window.addEventListener("resize", updateCanvasDimensions);

    const texts = [
      "The Matrix has you...",
      "Follow the white rabbit.",
      "Wake up, Neo...",
      "Knock, knock, Neo.",
      "There is no spoon.",
      "Welcome to the real world.",
    ];

    const particlesArray = [];
    const activeTexts = new Set();

    class TextParticle {
      constructor(text, x, y, delay) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.delay = delay; // Delay before starting to type
        this.index = 0;
        this.opacity = 1;
        this.life = 0;
        this.started = false;
        this.cursorBlink = 0;
        this.typingSpeed = typingSpeed; // Typing speed
        this.typingTick = 0;
      }

      draw() {
        ctx.fillStyle =
          localtheme === "dark"
            ? `rgba(255, 255, 255, ${this.opacity})`
            : `rgba(1,1,1, ${this.opacity})`;
        ctx.font = "20px Courier New";
        ctx.fillText(this.text.slice(0, this.index), this.x, this.y);

        // Draw cursor at the end of the current text
        if (this.started) {
          ctx.fillStyle = `rgba(255,81,47, ${this.opacity})`;
          if (this.cursorBlink % 60 < 30) {
            // Cursor blink effect
            ctx.fillRect(this.x + this.index * 12, this.y - 18, 10, 20); // Adjust the cursor position and size
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

        // Ensure the new text is unique
        let newText;
        do {
          newText = texts[Math.floor(Math.random() * texts.length)];
        } while (activeTexts.has(newText));
        this.text = newText;
        activeTexts.add(newText);

        this.delay = Math.floor(Math.random() * 100); // Random delay before starting to type again
      }
    }

    function getRandomPosition() {
      const x = Math.random() * (canvas.width - 200); // 200 to prevent overflow
      const y = Math.random() * (canvas.height - 50); // 50 to prevent overflow
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

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    init();
    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
    };
  }, [maxTexts, textDuration, typingSpeed, localtheme]);

  return canvasRef;
};

export default useTypewriterAnimation;
