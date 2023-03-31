/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "firmes-black": "#111111",
        "firmes-violet": "#8B56FA",
        "firmes-form": "#f5f4f1"
      },
      fontFamily: {
        'avant': ['avant'],
        'average-sans': ['Average Sans, sans-serif']

      },
      lineHeight:{
        '11': "52px"
      },
      height: {
        '70vh': '70vh',
      }
    },
  },
  plugins: [],
}
