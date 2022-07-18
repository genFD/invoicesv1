/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "7C5DFA": "##7C5DFA",
      "9277FF": "#9277FF",
      "1E2139": "#1E2139",
      252945: "#252945",
      DFE3FA: "#DFE3FA",
      "888EB0": "#888EB0",
      "7E88C3": "#7E88C3",
      "0C0E16": "#0C0E16",
      EC5757: "#EC5757",
      FF9797: "#FF9797",
      F8F8FB: "#F8F8FB",
      141625: "#141625",
    },
    fontSize: {
      "heading-1": [
        "32px",
        { lineHeight: "35px", letterSpacing: "-1px", fontWeight: "bold" },
      ],
      "heading-2": [
        "20px",
        { lineHeight: "22px", letterSpacing: "-0.63px", fontWeight: "bold" },
      ],
      "heading-3": [
        "16px",
        { lineHeight: "24px", letterSpacing: "-0.8px", fontWeight: "bold" },
      ],
      "heading-4": [
        "12px",
        { lineHeight: "12px", letterSpacing: "-0.25px", fontWeight: "bold" },
      ],
      "body-1": ["12px", { lineHeight: "15px", letterSpacing: "-0.25px" }],
      "body-2": ["11px", { lineHeight: "18px", letterSpacing: "-0.23px" }],
    },
    extend: {
      width: {
        141: "141px",
      },
    },
    screens: {
      sm: "640px",
      tablet: "768px",
      laptop: "1024px",
      xl: "1280px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
