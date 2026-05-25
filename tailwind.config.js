/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep:  '#07102A',
          mid:   '#1A2D5A',
          light: '#1E3A6E',
          DEFAULT: '#0D1B3E',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Source Sans 3', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}