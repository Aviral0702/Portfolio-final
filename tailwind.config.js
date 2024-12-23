/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {  
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        merriweather: ['"Merriweather"', 'serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)',duration: '1s' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out',
      },
    },
  },
  corePlugins: {
    // Enable the transform utility globally
    transform: true,
  },
  plugins: [
    flowbite.plugin(),
  ],
}
