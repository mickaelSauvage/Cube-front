module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: 
    {backgroundColor: theme => ({
      ...theme('colors'),
      'btn': '#7A4DFE',}),
      backgroundImage: theme => ({
      'body': "url('./Images/backgrounds/background-fiche-defi-2.svg')",
      'trie': "url('./Images/icons/sort.svg')",
      'form': "url('./Images/backgrounds/bg-form.svg')",
     }),
     
    },
    
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
