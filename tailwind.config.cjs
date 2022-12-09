/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{RM:" 'Roboto Mono', monospace "},
      height: {'128': '32rem','160': '44rem'},
      colors:{
        white:  colors.white,
        black: colors.black,
        indigo: colors.indigo,
        green: colors.green,
        google:{
           g1:'#4285f4',
           g2:'#ea4335',
           g3:'#fbbc05',
           g4:'#34a853'
        }
    }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
