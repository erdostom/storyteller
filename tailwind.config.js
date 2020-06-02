module.exports = {
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
      linearGradientColors: theme => theme('colors'),
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-gradients')
  ],
}
