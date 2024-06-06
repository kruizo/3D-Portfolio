import { useEffect, useRef } from "react";

const useParticleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: null,
      y: null,
      radius: 100,
    };

    const particlesArray = [];
    const numberOfParticles = 50;

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 10;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 10;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 10;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 10;
          }
        }

        this.x += this.directionX * 0.5;
        this.y += this.directionY * 0.5;
        this.draw();
      }
    }

    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 5 + 1;
        let x = Math.random() * (innerWidth - size * 2) + size;
        let y = Math.random() * (innerHeight - size * 2) + size;
        let directionX = Math.random() * 2 - 1;
        let directionY = Math.random() * 2 - 1;
        let color = "#121212";

        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y);
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = "rgba(255,81,47," + opacityValue + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
      });
      window.removeEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      });
    };
  }, []);

  return canvasRef;
};

export default useParticleAnimation;
