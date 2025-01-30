/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["REM", "serif"],
      },
      fontWeight: {
        extralight: "150", // Custom weight
        semiboldplus: "650", // Custom weight
        heavy: "900", // Override existing
      },
      colors: {
        primary: "#E93037",
        secodary: "#FFBC11",
      },
    },
  },
  plugins: [],
};
