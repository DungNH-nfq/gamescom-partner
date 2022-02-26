const colors = {
  blue: {
    80: '#89DEFE',
    90: '#5FD3FF',
    100: '#00B9FF',
    110: '#0099D3',
    120: '#0177A4',
  },
  grey: {
    0: '#FFFFFF',
    10: '#E0E2ED',
    20: '#C4C7DA',
    30: '#A7AAC0',
    40: '#9699AF',
    50: '#6D708B',
    60: '#60637E',
    70: '#505270',
    80: '#3F4051',
    90: '#292937',
    100: '#1B1B25',
    110: '#111117',
  },
  purple: {
    70: '#5101AD',
    80: '#5600FF',
    90: '#6803DD',
    100: '#450095',
    110: '#2E0064',
    120: '#1C003D',
  },
  green: '#72E11A',
  red: '#FF1556',
};

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: { sans: ['"Open Sans"'] },
    extend: {
      colors: {
        ...colors,
        button: {
          blue: {
            default: colors.blue['110'],
            border: colors.blue['100'],
            hover: colors.blue['100'],
          },
          grey: {
            default: colors.grey['60'],
            border: colors.grey['0'],
            hover: colors.grey['0'],
          },
          grey: {
            default: colors.purple['100'],
            border: colors.purple['70'],
            hover: colors.purple['70'],
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
