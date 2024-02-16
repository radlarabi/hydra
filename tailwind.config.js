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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'nav': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#302C42',
        'custom-radial1': '#3A3456',
        'custom-radial2': '#211e2e',
        'custom-purple': '#9E94C9',
        'custom-dark-gray': '#2A2639',
      },
    },
  },
  plugins: [],
};
