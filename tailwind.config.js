/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Main App file
    "./app/**/*.{js,jsx,ts,tsx}", // All files in the 'app' directory, including '(tabs)'
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#2cc15c',
        white: '#ffffff' 
      },
    },
  },
  plugins: [],
}

