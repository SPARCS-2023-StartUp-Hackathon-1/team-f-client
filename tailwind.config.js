/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        // heading
        h1: ['3.4rem', { fontWeight: '700', lineHeight: '4.0rem', letterSpacing: '-0.25px' }],
        h2: ['2.4rem', { fontWeight: '700', lineHeight: '2.6rem', letterSpacing: '0px' }],
        // body
        b1: ['1.6rem', { fontWeight: '500', lineHeight: '2.4rem', letterSpacing: '-0.25px' }],
        b2: ['1.4rem', { fontWeight: '500', lineHeight: '1.8rem', letterSpacing: '-0.25px' }],
        // etc
        subtitle: ['1.8rem', { fontWeight: '600', lineHeight: '2.0rem', letterSpacing: '-0.25px' }],
        caption: ['1.2rem', { fontWeight: '500', lineHeight: '1.5rem', letterSpacing: '0px' }],
      },
      colors: {
        gray: {
          0: '#FFFFFF',
          50: '#F3F3F8',
          100: '#E0E0ED',
          200: '#C5C5DC',
          300: '#8787A2',
          500: '#5C5C71',
          700: '#313240',
        },
        primary: {
          default: '#4F61FF',
          hover: '#3F4ECC',
          press: '#2F3A99',
        },
        secondary: {
          default: '#00D8BE',
          hover: '#00AD98',
          press: '#008272',
        },
        system: {
          error: '#FF4141',
        },
      },
    },
  },
  plugins: [],
};
