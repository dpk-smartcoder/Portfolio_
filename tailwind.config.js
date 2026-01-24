/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4DD0E1',
          dark: '#26A69A',
        },
        dark: {
          DEFAULT: '#000000',
          light: '#0a0a0a',
        }
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
