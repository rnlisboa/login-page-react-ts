/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#",
        secondary: "#",
        "large-bg": '#F1F5F9',
        "primary-text": "#",
        "input-bg": '#F1F1F1',
        "button-bg": '#02274F',
        "button-bg-weak": '#02274F70',
        "input-text-color": '#999999'
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
      boxShadow: {
        'sombra': '0px 0px 64px 0px #00000040',
      },
      fontFamily: {
        'nunito': ["Nunito Sans"],
      }
    },
  },
  plugins: [],
};