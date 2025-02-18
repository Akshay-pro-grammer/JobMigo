/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nile-blue': {
          '50': '#f4f7fb',
    '100': '#e8eef6',
    '200': '#cbdcec',
    '300': '#9dbfdc',
    '400': '#689cc8',
    '500': '#4682b4',
    '600': '#346695',
    '700': '#2b5279',
    '800': '#274665',
    '900': '#253c55',
    '950': '#182739',
        },
        'quarter-spanish-white': {
          '50': '#ecfcff',
          '100': '#cef6ff',
          '200': '#a4ebfd',
          '300': '#61dafb',
          '400': '#1fc0f1',
          '500': '#03a3d7',
          '600': '#0681b4',
          '700': '#0c6892',
          '800': '#145576',
          '900': '#154764',
          '950': '#072d45',

        },



      }
    },
  },
  plugins: [],
}