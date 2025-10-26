/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E2A38', // Midnight Blue
          dark: '#162029',
        },
      },
      fontFamily: {
        primary: ["Noto Serif KR", "Cormorant Garamond", "serif"],
        english: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};