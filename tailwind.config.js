/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  safelist: [
    'bg-custom-green',
    'bg-custom-half-green',
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '5%',
        sm: '2rem',
      },
    },
    extend: {
      // screens: {
      //   sm: "600px",
      //   md: "700px",
      //   lg: "1000px",
      //   xl: "1250px",
      // },
      colors: {
        'custom-green': '#ABEF5F',
        'custom-half-green': 'rgba(172, 239, 95, 0.7)',
        'white':'#ffffff',
        'custom-white': '#eeeeee',
        'custom-ash': '#dcdcdc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
