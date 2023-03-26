/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    backgroundImage: {
      landingBackground: "url('./assets/landing.jpg')",
    },
    extend: {
      colors: {
        // color1: "#112240",
        // color2: "#1fa2aa",
        // color3: "7ad4dd",
        // color4: "4fba73",
        // color5: "0a572f",
        // color6: "062715",
        primary: "#dadada",
        secondary: "#940404",
        // dimWhite: "#dadada",
        // dimBlue: "rgba(9, 151, 124, 0.1)",
        dimBlue: "rgba(31, 162, 170, 0.3)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

// color1: "#056564",0a572f
// dimWhite: "#464646",
// primary: "#00040f",
// secondary: "#00f6ff",
// dimWhite: "rgba(255, 255, 255, 0.7)",
// dimBlue: "rgba(9, 151, 124, 0.1)",
