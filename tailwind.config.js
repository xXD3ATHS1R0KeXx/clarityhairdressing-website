const colours = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clarityGold: '#E5D5BB',
        buttonGold: '#d5bfa4',
        customGrey: '#E68A8D'
      },
      backgroundImage: {
        'clarityIcon': "url('/"
      }
    },
  },
  plugins: [],
}