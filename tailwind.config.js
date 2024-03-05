/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#ffffff',
          borderline: '#f4f7fd140',
          secondary:'#007bff' ,
          background: '#f4f7fd',
          text: '#000000',
        },
        dark: {
          primary: '#61dafb',
          borderline: '#f4f7fd140',
          secondary: '#2b2c37',
          background: '#20212c',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [
     require('tailwind-scrollbar'),
  ],
}


/* .dark {
  background: #20212c;
  --color-bg: #20212c;
  --color-scroll: #3e3f4e;
  --color-borderLine: #3e3f4e;
  --color-main: #2b2c37;
  --color-title: #ffffff;
  --color-subTitle: #ffffff;
  --color-board: #20212c;
  --color-themeSwitchBox: #20212c;
  --color-addButton: #ffffff;
  --color-ellipsis: #20212c;
  --color-checked: rgba(255, 255, 255, 0.5);
} */

// plugins: [
//   require('tailwind-scrollbar'),
// ],