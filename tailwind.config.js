/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e6e6e8",
        secondary: "#f0faffaa",
        tertiary: "#052026",
        "black-100": "#031013",
        "black-200": "#04181C",
        "black-300": "#171719",
        "white-100": "#EEFAFD",
      },
      boxShadow: {
        card: {
          base: "0px 35px 120px -15px #1D1D1F",
          xs: "0px 1px 16px 1px rgba(51, 51, 51, 0.1)",
          sm: "0px 2px 16px 2px rgba(51, 51, 51, 0.1)",
        },
        icon: "0px 10px 20px rgba(28, 44, 64, 0.08)",
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
  ],
}
