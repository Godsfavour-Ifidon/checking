/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "700px",
        lg: "1000px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
