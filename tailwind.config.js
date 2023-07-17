/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main_bg: "#f6f7f7",
        primary: "#fed100",
        secondary: "#333",
        tertiary: "#45f",
        quaternary: "red",
      },
    },
  },
  plugins: [],
};
