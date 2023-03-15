module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#1E1F22',
        secondary: '#313338',
        active: '#06D6A0',
        accent: '#EF476F',
        text: '#EEEFF0'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'buttonShadow': '0px 0px 10px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
