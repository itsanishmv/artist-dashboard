/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      dark: "#030303",
      white: "#FFFFFF",
      purple: "#6741D9",
      pink: "#F0C3F1",
      greyed: "#C2C2C2",
    },
    fontSize: {
      Heading: "32px",
      small: "16px",
    },
    fontFamily: {
      display: ["Poppins"],
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
