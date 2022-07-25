/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'public/index.html'],
  darkMode: 'class',
  theme: {
    colors: {
      '7C5DFA': '#7C5DFA',
      '9277FF': '#9277FF',
      '1E2139': '#1E2139',
      252945: '#252945',
      DFE3FA: '#DFE3FA',
      F9FAFE: '#F9FAFE',
      '888EB0': '#888EB0',
      '7E88C3': '#7E88C3',
      '0C0E16': '#0C0E16',
      EC5757: '#EC5757',
      FF9797: '#FF9797',
      FF8F00: '#FF8F00',
      F8F8FB: '#F8F8FB',
      141625: '#141625',
      '373B53': '#373B53',
      '494E6E': '#494E6E',
      FFFF: '#FFFF',
      '33D69F': '#33D69F',
      '858BB2': '#858BB2',
    },
    fontSize: {
      'heading-1': [
        '32px',
        { lineHeight: '35px', letterSpacing: '-1px', fontWeight: 'bold' },
      ],
      'heading-2': [
        '20px',
        { lineHeight: '22px', letterSpacing: '-0.63px', fontWeight: 'bold' },
      ],
      'heading-3': [
        '16px',
        { lineHeight: '24px', letterSpacing: '-0.8px', fontWeight: 'bold' },
      ],
      'heading-4': [
        '12px',
        { lineHeight: '12px', letterSpacing: '-0.25px', fontWeight: 'bold' },
      ],
      'heading-5': [
        '15px',
        {
          lineHeight: '20px',
          letterSpacing: '-0.3125px',
          fontWeight: 'bold',
        },
      ],
      'heading-6': [
        '20px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.42px',
          fontWeight: 'bold',
        },
      ],
      'body-1': ['12px', { lineHeight: '15px', letterSpacing: '-0.25px' }],
      'body-2': ['11px', { lineHeight: '18px', letterSpacing: '-0.23px' }],
    },

    extend: {
      width: {
        73: '73px',
        89: '89px',
        90: '90px',
        94: '94px',
        96: '96px',
        '1px': '1px',
        141: '141px',
        149: '149px',
        72: '72px',
        327: '327px',
        104: '104px',
        232: '232px',
        279: '279px',
      },
      height: {
        34: '34px',
        48: '48px',
        91: '91px',
        72: '72px',
        75: '75px',
        134: '134px',
        148: '148px',
        139: '139px',
        695: '695px',
        211: '211px',
        228: '228px',
      },
      padding: {
        '6px': '6px',
        '14px': '14px',
      },
      borderRadius: {
        '20px': '20px',
      },
      margin: {
        '30px': '30px',
      },
    },
    screens: {
      sm: '640px',
      tablet: '768px',
      laptop: '1024px',
      xl: '1280px',
      desktop: '1440px',
    },
  },
  plugins: [],
};
