/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/nav/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tech': "url('/assets/MaskGroup5.png')",
      },
      fontFamily: {
        'nav': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#302C42',
        'custom-radial1': '#393354',
        'custom-radial2': '#272338',
        'custom-purple': '#9E94C9',
        'custom-purple-rounded': '#1D1B26',
        'custom-dark-gray': '#2A2639',
        'purple-card': '#211E2D',
      },
    },
  },
  plugins: [],
};
