/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {},
    lineHeight: {},
    fontWeight: {
      thin: '300',
      normal: '400',
      medium: '500',
      bold: '700',
    },
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        nunito: ['Nunito', 'system-ui', 'sans-serif'],
        rubik: ['Rubik Vinyl', 'cursive'],
      },
      spacing: {},
      borderRadius: {},
      backgroundImage: {
        bender: "url('./src/assets/images/bender.jpg')",
      },
      colors: {
        blue: '#5254f4',
        goldYellow: '#cda739',
        grayBlue: '#bab3d1',
      },
    },
  },
  plugins: [],
};
