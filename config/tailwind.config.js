const colors = {
  transparent: 'transparent',
  black: '#273444',
  grey: '#C9CCD0',
  white: '#ffffff',
  red: '#ED3E37',
  green: '#16A9A9',
  yellow: '#F9A02D',
};

const spacing = {
  px: '1px',
  '0': '0',
  '1': '1rem', // 4px
  '2': '2rem', // 8px
  '3': '3rem', // 12px
  '4': '4rem', // 16px
  '6': '6rem', // 24px
  '8': '8rem', // 32px
  '10': '10rem', // 40px
  '12': '12rem', // 48px
  '16': '16rem', // 64px
  '24': '24rem', // 96px
  '32': '32rem', // 128px
  '48': '48rem', // 192px
  '64': '64rem', // 256px
};

module.exports = {
  theme: {
    borderRadius: {
      none: '0',
      default: '1rem',
    },
    colors,
    spacing,
    fonts: {
      sans: [
        'Montserrat',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    fontSizes: {
      xs: '3rem', // 12px
      sm: '3.5rem', // 14px
      base: '4rem', // 16px
      md: '5rem', // 20px
      lg: '6.5rem', // 26px
      xl: '8rem', // 32px
      '2xl': '10rem', // 40px
      '3xl': '13rem', // 54px
      '4xl': '16rem', // 64px
      '5xl': '20rem', // 80px
    },
    maxWidth: {
      xs: '20rem',
      sm: '30rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      '6xl': '150rem',
      full: '100%',
    },
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
};
