/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e6e6e8",
        secondary: "#ade8f4",
        tertiary: "#052026",
        "black-100": "#031013",
        "black-200": "#04181C",
        "white-100": "#EEFAFD",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1D1D1F",
        "card-xs": "0px 1px 16px 1px rgba(51, 51, 51, 0.1)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "about-ornament": "url('/src/assets/ornament.png')",
        "card-placeholder": "url('/src/assets/placeholder.png')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

