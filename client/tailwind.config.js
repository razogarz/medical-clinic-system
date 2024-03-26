/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A5DD9B',
        'secondary': '#C5EBAA',
        'background': '#F6F193',
        'accent': '#F2C18D',
      }
    },
  },
  plugins: [require("daisyui")],
}

