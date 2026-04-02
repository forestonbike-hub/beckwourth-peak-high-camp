/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#3E3E3E',
        cobalt: '#0E75D8',
        gold: '#D4A574',
        cream: '#FAFAF7',
        'dark-nav': '#1C1C1C',
      },
      fontFamily: {
        heading: ['Oswald', 'Impact', 'sans-serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1200px',
      },
    },
  },
  plugins: [],
};
