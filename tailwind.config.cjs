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
        parallax:
          "url('https://images.unsplash.com/photo-1671296368370-a24a6f9148cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80')",
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
