const colors = require("tailwindcss/colors")
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: {
    content: ["src/**/*.{js,ts,jsx,tsx}"],
  },
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        turquoise: "#0aa5ac",
        white: "#ffffff",
        black: "#231f20",
        trueblack: "#000000",
        yellow: "#f5b335",
        tribegray: "#a4a4a4",
        warmgray: "#333333",
        darkgray: "#1f1f1f",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
