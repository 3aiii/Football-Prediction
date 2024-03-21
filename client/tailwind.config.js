/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
        'white': '#ffffff',
        'black' : '#111111',
        's-light-gray' : '#f9fafb',
        'light-gray' : '#9ca3af',
        'gray' : '#1f2937',
        'light-black' : '#151515',
        's-black' : '#333333',
        'md-black' : '#181818',
        'light-or' : '#F8A145',
        'medium-or' : '#F07900',
        'hard-or' : '#D35100'
    },
    extend: {},
  },
  plugins: [],
}