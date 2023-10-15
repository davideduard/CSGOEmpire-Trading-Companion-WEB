/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    colors: {
      'green': {
        DEFAULT: '#00AE58'
      },
      'darkBlue': {
        light: '#1F2029',
        DEFAULT: '#1A1C24'
      },
      'white': {
        DEFAULT: '#FFFFFF'
      },
      'yellow': {
        lightest: '#edc13e',
        light: '#ebb926',
        DEFAULT: '#e9b10e',
        dark: '#d29f0d',
        darkest: '#ba8e0b'
      }
    },
    extend: {
      fontFamily: {
        'primary' : ['Nunito']
      }
    },
  },
  plugins: [],
}

