/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  extend: {
    fontFamily: {
      playfair: ['"Playfair Display"', 'serif'],
      merriweather: ['"Merriweather"', 'serif'],
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

