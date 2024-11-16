/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          'marine-blue': '#12233a',
          'purplish-blue': '#5850ec',
          'pastel-blue': '#a2cfff',
          'light-blue': '#a6e4ff',
          'strawberry-red': '#ef3b56',
        },
        neutral: {
          'cool-gray': '#8b8e96',
          'light-gray': '#d1d5db',
          'magnolia': '#f5f8fc',
          'alabaster': '#fafbff',
          'white': '#ffffff',
        },
      },
    },
  },
  plugins: [],
}
