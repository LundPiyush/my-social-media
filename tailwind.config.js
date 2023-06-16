/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
      },
      buttons: {},
      boxShadow: {
        "2xl": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
      },
    },
  },
  plugins: [],
};
