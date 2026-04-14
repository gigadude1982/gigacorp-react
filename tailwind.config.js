/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          200: '#c0d2ff',
          300: '#94aeff',
          400: '#6080ff',
          500: '#3d55ff',
          600: '#2532f5',
          700: '#1c22e0',
          800: '#1c20b5',
          900: '#1c218e',
          950: '#101356',
        },
        dark: {
          900: '#07070d',
          800: '#0f0f1a',
          700: '#161625',
          600: '#1e1e32',
          500: '#282842',
        },
      },
    },
  },
  plugins: [],
}
