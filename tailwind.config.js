/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "ts": "320px",
        "xs": "500px",
        "3xl": "1820px",
        "4xl": "2080px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
