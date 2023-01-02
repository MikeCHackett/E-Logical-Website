module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    keyframes: {
      fadeInOut: {
        '0%, 100%' : { opacity: '0' },
        '50%' : { opacity: '1' },
      }
    },
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
      },
    },
    screens: {
      sm: '640px',
      md: '760px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      primary: 'Comfortaa',
      body: 'Nunito',
    },
    colors: {
      primary: '#6F7378',
      secondary: '#ABB0B8',
      accent: '#6B6A69',
      black: '#343434',
      card: '#4C4E52',
      hover: '#5D3FD3',
      background: '#0D1117',
      white: '#fff',
      green: '#AAFF00',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
