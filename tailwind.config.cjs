module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#210024',
        secondary: '#3D2645',
        active: '#DA4167',
        accent: '#832161',
        text: '#F0EFF4'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
