/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{RM:" 'Roboto Mono', monospace "},
      height: {'128': '32rem','160': '44rem'},
    },
  },
  plugins: [],
}
