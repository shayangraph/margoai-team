/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#F8CD53",
        secondry: "#736AEC",
        backgroundPrimary: "#FFF9E7",
      },
      spacing: {
        p350:'320px',
        p200:'200',
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
