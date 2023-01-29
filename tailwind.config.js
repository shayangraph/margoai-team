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
        screen80: "80vh",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
