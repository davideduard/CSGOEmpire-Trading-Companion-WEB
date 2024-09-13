/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    colors: {
      'errorRed': {
        DEFAULT: '#f44336'
      },
      'green': {
        DEFAULT: '#00AE58'
      },
      'darkBlue': {
        lightest: '#24252F',
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
      },
      'transparent': {
        DEFAULT: 'transparent'
      },
      'gray': {
        DEFAULT: '#D9D9D9'
      }
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {opacity: 0, transform: 'translate(0, 2%)'},
          '100%': {opacity: 1, transform: 'translate(0, 0)'}
        },
        fadeOut: {
          '0%': {opacity: 1, transform: 'translate(0, 0)'},
          '100%': {opacity: 0, transform: 'translate(0, 10%)'}
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out forwards',
        fadeOut: 'fadeOut 0.2s ease-out forwards'
      },
      fontFamily: {
        'primary' : ['Nunito']
      },
      width: {
        '96': '32rem'
      }
    },
  },
  plugins: [],
}

