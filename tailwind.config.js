/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF6B35',
        primary: {
          50: '#FFF5F1',
          100: '#FFE6DB',
          500: '#FF6B35',
          600: '#E85A24',
          700: '#D14913',
        },
        beige: {
          50: '#FAF6F3',
          100: '#F5EDE7',
          200: '#EBD9CD',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
    },
  },
  plugins: [],
}