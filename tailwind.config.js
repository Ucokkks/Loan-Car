/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        NavColor: '#FBFBFE',
        ButtonColor:'#1B3554',
        ButtonHover:'#011E40',
        BlueAvailable:'#003D84',
        ButtonDetail:'#00395A',
        InUse:'#00FF0A',
        InMaintenance:'#FF3B3B'
      },
        fontFamily: {
        'sf-pro': ['"SF Pro Display"', 'sans-serif'],
        },
    },
  },
  plugins: [],
}
