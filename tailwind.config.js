module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0b013d",
        secondary: "#0a60e7"
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '15px',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
        '7xl': '5rem',
       }
    },

    // 0b013d
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
