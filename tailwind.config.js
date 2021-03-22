module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
      ringOffsetWidth: ['hover', 'active'],
      ringOffsetColor: ['hover', 'active']
    },
  },
  plugins: [],
}
