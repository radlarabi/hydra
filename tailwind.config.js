/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/nav/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
      extend: {
        colors: {
          'custom-blue': '#302C42',
          'custom-radial1': '#393354',
          'custom-radial2': '#272338',
          'custom-purple': '#9E94C9',
          'custom-purple-rounded': '#1D1B26',
          'custom-dark-gray': '#2A2639',
          'purple-card': '#211E2D',
          'purple-step': '#B3A9DC',
          'border-steps': '#252231',
          'flesh-button': '#433D60',
        },
        backgroundImage: {
          'tech': "url('/assets/MaskGroup5.png')",
        },
        fontFamily: {
          'nav': ['Montserrat', 'sans-serif'],
        },
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
          keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
