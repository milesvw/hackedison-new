/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-magenta": "#DF00FF",
        "dark-magenta": "#BF00FF",
        "violet": "#8A00FF",
        "black": "#000000",
        "grey": "#1C1C1C",
        "white": "FFFFFF",
      },
    },
    fontFamily: {
      "rubik": ['"Rubik", sans-serif'],
      "montserrat": ['"Montserrat", sans-serif'],
    },
  },
  plugins: [],
};
