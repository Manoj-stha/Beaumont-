/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // custom: ['CustomFont', 'sans-serif'], // For a local font
        poppins: ['poppins', 'sans-serif'],     // For a Google Font
        playfair: ["Playfair Display", 'serif'],
        montserrat: ['Montserrat', 'serif'],
      },
      colors: {
        lightGray: '#eeeeee', // Add your custom color
      },
    },
  },
  plugins: [],
}