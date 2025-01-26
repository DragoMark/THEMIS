/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header: {
          light: '#2D2D2D',
          dark: '#373737',
        },
      }
    },
  },
  plugins: [],
}

