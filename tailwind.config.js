/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        main: "Mukta Mahee, sans-serif",
      },
      colors: {
        blu: "#424874",
        circle: "#caf0f8",
        bground: "#77ACF1",
      },
    },
  },
  plugins: [],
};
