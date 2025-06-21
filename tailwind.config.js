/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
          fontFamily: {
            sans: ['General Sans', 'sans-serif'],
          },
        },
      },      
    plugins: [],
  };
  