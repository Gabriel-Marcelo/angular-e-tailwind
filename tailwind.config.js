const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.height-fit': {
          height: 'fit-content',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}
