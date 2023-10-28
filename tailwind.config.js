/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        sm: '440px'
      },
      colors: {
        primary: '#ff6b27',
        red: '#df040a',
        unwhite: '#ffffff20'
      },
      borderRadius: {
        '4xl': '16rem'
      }
    },
  },
  plugins: [],
}
