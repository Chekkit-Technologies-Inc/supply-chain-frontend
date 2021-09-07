const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand_blue: '#153853',
        brand_green: '#46F7AD',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
