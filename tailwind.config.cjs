/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '500': '500',
      },
      colors: {
        'gray-text': '#8a8a8a',
        'gray-card': '#dddddd',
        'circle-contact': 'rgba(118, 152, 255, 0.4);'
      }
    },
  },
  plugins: [],
}
