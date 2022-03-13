const colours = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '275px',
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      colors: {
        clarityGold: '#E5D5BB',
        buttonGold: '#d5bfa4',
        customGrey: '#E68A8D',
        offwhite: '#F5F5F5'
      },
      fontFamily: {
        gayathri: ["Gayathri", "sans-serif"],
        dancingscript: ["Dancing Script", "Cursive"],
        italianno: ["Italianno", "Cursive"],
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
      animation: {
          'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
    },
  },
  plugins: [],
}