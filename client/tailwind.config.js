/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F7F7F7',
        'secondary': '#EEEEEE',
        'background': '#929AAB',
        'accent': '#393E46',
      }
    },
  },
  plugins: [require("daisyui")],
}

