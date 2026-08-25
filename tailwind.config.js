/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'circular': ['Circular', 'sans-serif'],
      },
      colors: {
        'spotify': {
          'green': '#1DB954',
          'green-hover': '#1ed760',
          'dark': '#121212',
          'dark-secondary': '#181818',
          'dark-tertiary': '#282828',
          'text-primary': '#FFFFFF',
          'text-secondary': '#B3B3B3',
          'text-tertiary': '#727272',
          'border': '#282828',
          'hover': '#282828',
        }
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(29, 185, 84, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(29, 185, 84, 0.6)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      backgroundImage: {
        'spotify-gradient': 'linear-gradient(135deg, #1DB954 0%, #1ed760 100%)',
        'spotify-dark-gradient': 'linear-gradient(135deg, #121212 0%, #181818 100%)',
        'spotify-card-gradient': 'linear-gradient(135deg, #181818 0%, #282828 100%)',
      },
      boxShadow: {
        'spotify': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'spotify-green': '0 0 20px rgba(29, 185, 84, 0.3)',
        'spotify-card': '0 4px 16px rgba(0, 0, 0, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  corePlugins: {
    transform: true,
  },
  plugins: [],
}
