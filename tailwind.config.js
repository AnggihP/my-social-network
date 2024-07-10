module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cordovan': '#963F47',
        'almond': '#F4E3CF',
        current: 'currentColor',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
