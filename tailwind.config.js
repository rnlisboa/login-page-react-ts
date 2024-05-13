/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#",
        secondary: "#",
        "primary-text": "#",
      },
      fontFamily: {
        comic: ["Comic Neue", "cursive"],
      },
      backgroundColor: {
        header: "#",
      },
      backgroundImage: {
        wave: "url('./wave.svg')",
        stark: "url('/stark.png')",
        cap: "url('/cap.png')",
      },
    },
  },
  plugins: [],
};