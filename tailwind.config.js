/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#f5efed",
      black: "#191716",
      cyan: "#2292A4",
      purple: "#7522A4",
      red: "#A43422",
      green: "#51A422",
    },
    extend: {
      minHeight: {
        screen75: "75vh",
        screen80: "80vh",
        screen90: "90vh",
      },  
    },
  },
  plugins: [],
  darkMode: "class",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
