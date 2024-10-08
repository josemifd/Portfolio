/** @type {import('tailwindcss').Config} */
const {nextui, colors} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#141414",
        'react': "#7ee1ff",
        'javascript': "#f7e018",
        'html': "#ef5225",
        'css': "#13a1df",
        'c++': "#3949ab",
        'java': "#de8e2f",
        'mongodb': "#4faa41",
        'ocaml': "#f18704",
        primary: "#3415ae"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

