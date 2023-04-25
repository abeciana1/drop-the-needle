/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      extraLight: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
    screens: {
      'xs': '325px',
      // => @media (min-width: 325px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        altWhite: {
            DEFAULT: '#f8f8f8',
            '100': '#f0f0f0',
            '200': '#e4e4e4',
            '300': '#d1d1d1',
            '400': '#b4b4b4',
            '500': '#9a9a9a',
            '600': '#818181',
            '700': '#6a6a6a',
            '800': '#5a5a5a',
            '900': '#4e4e4e',
            '950': '#282828',
        },
        altBlack: {
          '50': '#f7f7f7',
          '100': '#e3e3e3',
          '200': '#c8c8c8',
          '300': '#a4a4a4',
          '400': '#818181',
          '500': '#666666',
          '600': '#515151',
          '700': '#434343',
          '800': '#383838',
          DEFAULT: '#343434',
          '950': '#1a1a1a',
        },
        vermillion: {
            '50': '#fef3f2',
            '100': '#ffe4e1',
            '200': '#ffcec9',
            '300': '#feaba3',
            '400': '#fb7a6e',
            DEFAULT: '#f24333',
            '600': '#e03222',
            '700': '#bd2618',
            '800': '#9c2318',
            '900': '#81241b',
            '950': '#460e09',
        },
        gold: {
            '50': '#ffffe7',
            '100': '#feffc1',
            '200': '#fffc86',
            '300': '#fff241',
            '400': '#ffe30d',
            DEFAULT: '#ffd400',
            '600': '#d19c00',
            '700': '#a66f02',
            '800': '#89560a',
            '900': '#74470f',
            '950': '#442504',
        },
        altGreen: {
            '50': '#f2f7ee',
            '100': '#e2edda',
            '200': '#c7dcba',
            '300': '#a4c690',
            '400': '#85af6c',
            DEFAULT: '#618b4a',
            '600': '#4f743c',
            '700': '#3e5a31',
            '800': '#34492b',
            '900': '#2e3f28',
            '950': '#162112',
        },
        ceruleanBlue: {
            '50': '#f0f7fe',
            '100': '#deebfb',
            '200': '#c4def9',
            '300': '#9cc9f4',
            '400': '#6dabed',
            '500': '#4a8ce7',
            '600': '#3570db',
            DEFAULT: '#2b59c3',
            '800': '#2a4ba3',
            '900': '#274281',
            '950': '#1c2a4f',
        },
        jaffa: {
            '50': '#fef8ec',
            '100': '#fceac9',
            '200': '#f8d28f',
            '300': '#f5b454',
            DEFAULT: '#f3a13b',
            '500': '#eb7815',
            '600': '#d0560f',
            '700': '#ad3a10',
            '800': '#8d2d13',
            '900': '#742613',
            '950': '#421106',
        },
      }
    },
  },
  plugins: [],
}
