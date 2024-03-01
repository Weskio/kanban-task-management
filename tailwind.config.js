/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#007bff',
          secondary: '#6c757d',
          background: '#ffffff',
          text: '#000000',
        },
        dark: {
          primary: '#61dafb',
          secondary: '#adb5bd',
          background: '#343a40',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [
     require('tailwind-scrollbar'),
  ],
}

// plugins: [
//   require('tailwind-scrollbar'),
// ],