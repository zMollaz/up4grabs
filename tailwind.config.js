module.exports = {
  content: [
    "./pages/**/*.{js,jsx,html}",
    "./components/**/*.{js,jsx,html}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'aqua': '#8ED1CA',
      'aquaLight':'#afded9',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      't-gray': '#080707', 
      'white': '#fefefe',
      'black': '#000000',
    },
    fontFamily: {
      sans: ['Teko', 'sans-serif', ],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

}
