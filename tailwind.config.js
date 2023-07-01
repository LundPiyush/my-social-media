/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "470px" },
    },
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "modal-background": "var(--modal-background-color)",
      },
      boxShadow: {
        "2xl": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
      },
      height: {
        calculate_nav: "calc(100vh - 72px)",
      },
    },
  },
  plugins: [],
};
