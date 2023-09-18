/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        monts: ['Montserrat', 'sans-serif'],
        clash : ['Clash Display', 'sans-serif'],
        unica : ['Unica One', 'cursive'],
      },
      colors:{
        'blue': '#150E28',
        'purple': '#903AFF',
        'light-purple': '#D434FE',
        'gradient': '#903AFF',
        'white': "#fff"
      },
    },
  },
  plugins: [],
}