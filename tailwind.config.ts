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
          DEFAULT: '#769263',
          50: '#D5DECE',
          100: '#CAD6C2',
          200: '#B5C5AA',
          300: '#A0B592',
          400: '#8BA479',
          500: '#769263',
          600: '#5B704C',
          700: '#404F36',
          800: '#252E1F',
          900: '#0A0C08',
          950: '#000000'
        },

        blue: {
          DEFAULT: '#365363',
          50: '#BCD5DA',
          100: '#A9C9D0',
          200: '#85AFBC',
          300: '#6195A8',
          400: '#4A7487',
          500: '#365363',
          600: '#2B414F',
          700: '#21303B',
          800: '#161F27',
          900: '#0B0F14',
          950: '#05080A'
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
          DEFAULT: '#BEA941',
          50: '#EDE7CA',
          100: '#E8E0BB',
          200: '#DDD29C',
          300: '#D3C57E',
          400: '#C8B75F',
          500: '#BEA941',
          600: '#948433',
          700: '#6A5F24',
          800: '#413A16',
          900: '#171408',
          950: '#020201'
        },

        grey: {
          DEFAULT: '#8A8885',
          50: '#EFEFEE',
          100: '#E4E3E3',
          200: '#CDCDCB',
          300: '#B7B6B4',
          400: '#A09F9C',
          500: '#8A8885',
          600: '#767471',
          700: '#615F5D',
          800: '#4C4B49',
          900: '#373635',
          950: '#2D2C2B'
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
