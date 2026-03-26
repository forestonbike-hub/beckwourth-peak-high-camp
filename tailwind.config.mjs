/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#2D5016',
        'brand-green-dark': '#1F3810',
        'brand-charcoal': '#3E3E3E',
        'brand-gold': '#D4A574',
        'brand-gold-dark': '#BF8F52',
        'brand-blue': '#4A5F6F',
        'brand-black': '#1A1A1A',
        'brand-offwhite': '#FAFAF7',
        'brand-cream': '#F5F2ED',
        'brand-sage': '#E8EDE4',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
