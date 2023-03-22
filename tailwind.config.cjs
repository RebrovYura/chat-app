/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#E8E9EA',
        secondary: '#292536',
        text: '#675C7C',
        input: '#352C46',
        button: '#06d6a0'
      },
      boxShadow: {
        'headerShadow': '0px 5px 10px rgba(0, 0, 0, 0.05)',
        'containerYShadow': 'inset 0px 10px 4px #292536, inset 0px -10px 10px #292536',
        'buttonShadow': '0px 0px 10px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}