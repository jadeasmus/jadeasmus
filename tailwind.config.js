const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      red: colors.red,
      gray: colors.gray,
      pink: "#F2B3BD",
      orange: "#ec8244",
    },
    fontFamily: {
      inder: ["Roboto", "sans-serif"],
      amiko: ["Amiko", "Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
