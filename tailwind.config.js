/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "hero-bg": "url('../img/hero.jpeg')",
      },
      colors: {
        main_bg: "#f6f7f7",
        primary: "#fed100",
        secondary: "#333",
        tertiary: "#45f",
        quaternary: "#851919",
      },
    },
  },
  plugins: [],
};
