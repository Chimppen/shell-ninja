module.exports = {
  mode:'jit',
  purge: [
      './src/**/*.html',
      './public/*.html',
      './src/**/*.js',
      './src/**/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
