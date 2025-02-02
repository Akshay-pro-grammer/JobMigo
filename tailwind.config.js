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
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#00000000',
        },
        'quarter-spanish-white': {
          '50': '#fffbeb',
          '100': '#fff4c6',
          '200': '#fee889',
          '300': '#fed33c',
          '400': '#fec321',
          '500': '#f8a208',
          '600': '#dc7a03',
          '700': '#b65507',
          '800': '#94420c',
          '900': '#79360e',
          '950': '#461b02',
        },



      }
    },
  },
  plugins: [],
}