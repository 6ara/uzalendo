/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'Red':'#ff0000',
        'Green':'#279625',
        'Black':'#141414',
      }
    },
    fontFamily: {
      Rubik: [ 'Rubik', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
