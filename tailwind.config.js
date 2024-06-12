/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#121212",
        black: "#040404",
        secondary: "#ff512f",
        "secondary-darken": "#DC4729",
        white: "#dfdfdf",
        tertiary: "#222831",
        darken: "#1B2026",
        darker: "#14181C",
        "slate-50": "#C2C2C2",
        "slate-100": "#5b5b5b",
      },
      fontSize: {
        xl: "100px",
        lg: "61px",
        md: "50px",
        sm: "20px",
        base: "25px",
      },
      keyframes: {
        textRotate1: {
          "0%, 40%": {
            opacity: "1",
            transform: "translate3d(0, 0%, 0) rotateX(0deg)",
          },
          "60%, 100%": {
            transform: "translate3d(0, -100%, 0) rotateX(-90deg)",
          },
        },
        textRotate2: {
          "0%, 40%": {
            transform: "translate3d(0, 100%, 0) rotateX(-90deg)",
          },
          "60%, 100%": {
            opacity: "1",

            transform: "translate3d(0, 0%, 0) rotateX(0deg)",
          },
        },
        textRotate3: {
          "0%, 40%": {
            opacity: "1",
            transform: "translate3d(0, 200%, 0) rotateX(-90deg)",
          },
          "60%, 100%": {
            opacity: "1",
            transform: "translate3d(0, 0%, 0) rotateX(-90deg)",
          },
        },
      },
      animation: {
        textRotate1: "textRotate1 2.4s infinite  alternate",
        textRotate2: "textRotate2 2.4s infinite  alternate",
        textRotate3: "textRotate3 2.4s infinite  alternate",
      },
    },
  },
  plugins: [],
};
