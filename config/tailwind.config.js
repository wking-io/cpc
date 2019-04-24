const colors = {
  transparent: 'transparent',
  black: '#03293b',
  grey: '#f2f4f5',
  white: '#ffffff',
  primary: '#5ba5bf',
  'primary-dark': '#436979',
};

module.exports = {
  theme: {
    colors,
    fontFamily: {
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
    fill: colors,
    extend: {
      height: {
        hero: '750px',
        '1px': '1px',
      },
      fill: {
        'primary-med': '#64929D',
      },
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
};
