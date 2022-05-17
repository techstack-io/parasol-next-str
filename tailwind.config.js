module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'baloo-2': ["'Baloo 2'", 'cursive'],
        'libre-bodoni': ['serif']
 
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'desert-storm': '#f8f8f7',
      'purple': '#44195E',
      'midnight': '#121063',
      'blaze': '#FC6601',
      'sandy': '#EF955D',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [],
}
