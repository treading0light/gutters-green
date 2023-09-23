/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    colors: {
      'primary': '#09860f',
      'secondary': '#193b1b',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

