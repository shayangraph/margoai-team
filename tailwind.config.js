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
        p450:'450px',
        p400:'400',
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
