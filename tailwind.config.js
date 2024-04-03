/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#002A48',
        'secondary': '#F7DBA7',
        'foreground': '#FCEED5',
        'neutral': '#242B33'
      },
      fontFamily: {
        'sans': ['SVN-Gilroy', 'sans-serif']
      },
      spacing: {
        'large-page': '130px',
        'small-page': '24px',
      }
    },
  },
  plugins: [],
}