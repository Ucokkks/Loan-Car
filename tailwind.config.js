/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        NavColor: '#FBFBFE'
      },
        fontFamily: {
        'sf-pro': ['"SF Pro Display"', 'sans-serif'],
        },
    },
  },
  plugins: [],
}
