const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      champagne: '#FBD1A2',
      meringue: '#ECE4B7',
      sandy: '#FC9F5B'
    },
    fontFamily: {
      'DM-Sans': ['DM-Sans'],
      'Dosis': ['Dosis'],
      'Poppins': ['Poppins'],
      'Rubik': ['Rubik']
    },
    extend: {
      animation: ['hover'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
