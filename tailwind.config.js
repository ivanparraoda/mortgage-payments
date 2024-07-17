/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg_main: 'rgb(19, 48, 64)',
        bg_second: 'rgb(14 36 49)',
        accent: 'rgb(217 220 46)'
      }
    }
  },
  plugins: []
}
