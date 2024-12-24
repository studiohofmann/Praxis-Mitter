import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        plein: ['Plein', 'sans-serif'], // Replace 'custom' with a name you'll use in classes
        switzer: ['Switzer', 'sans-serif'], // Replace 'custom' with a name you'll use in classes
      },
      colors: {

        green: {
          DEFAULT: '#828E6B',
          50: '#DADED3',
          100: '#D1D5C8',
          200: '#BDC4B1',
          300: '#A9B299',
          400: '#96A182',
          500: '#828E6B',
          600: '#656E53',
          700: '#484E3B',
          800: '#2A2F23',
          900: '#0D0F0B',
          950: '#000000'
        },

        blue: {
          DEFAULT: '#5B788B',
          50: '#E0E7EB',
          100: '#D1DBE1',
          200: '#B2C2CD',
          300: '#93AAB8',
          400: '#7492A4',
          500: '#5B788B',
          600: '#475E6C',
          700: '#32434D',
          800: '#1E282E',
          900: '#0A0D0F',
          950: '#000000'
        },

        red: {
          DEFAULT: '#8B635B',
          50: '#EBE2E0',
          100: '#E1D4D1',
          200: '#CDB7B2',
          300: '#B89A93',
          400: '#A47D74',
          500: '#8B635B',
          600: '#6C4D47',
          700: '#4D3732',
          800: '#2E211E',
          900: '#0F0B0A',
          950: '#000000'
        },

        yellow: {
          DEFAULT: '#94906B',
          50: '#E1E0D6',
          100: '#D8D7CA',
          200: '#C7C5B2',
          300: '#B6B39A',
          400: '#A5A283',
          500: '#94906B',
          600: '#737054',
          700: '#53513C',
          800: '#323124',
          900: '#12110D',
          950: '#010101'
        },

        grey: {
          DEFAULT: '#8A8885',
          50: '#FAFAFA',
          100: '#EEEDED',
          200: '#D5D4D3',
          300: '#BCBBB9',
          400: '#A3A29F',
          500: '#8A8885',
          600: '#706F6B',
          700: '#565552',
          800: '#3C3B39',
          900: '#222220',
          950: '#151514'
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
