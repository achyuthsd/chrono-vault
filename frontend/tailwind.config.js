/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                // Include your Vite HTML file
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all React source files
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'],  // 👈 Custom font
      },
      screens: {
        'as': { 'max': '1166px' },                      // Extra small screens
        'as1': { 'max': '863px' },                      // Extra small screens
        'as2': { 'max': '572px' },                      // Extra small screens
        'l': { 'max': '1244px' },                      // Extra small screens
        'l1': { 'max': '550px' },                      // Extra small screens
        'h': { 'max': '682px' },                      // Extra small screens
        'h1': { 'max': '465px' },                      // Extra small screens
        'i': { 'max': '759px' },                      // Extra small screens
        'o': { 'max': '924px' },                      // Extra small screens
        '3xl': '1600px',                    // Extra large screens
        'tall': { 'raw': '(min-height: 900px)' }, // Height-based query
        'custom': { 'min': '700px', 'max': '900px' }, // Range query
      },
    },
  },
  plugins: [],
}
