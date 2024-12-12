import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        'blue': {
          50: '#f4f6f7',
          100: '#e4e7e9',
          200: '#cbd1d6',
          300: '#a7b0b9',
          400: '#7c8794',
          500: '#616c79',
          600: '#535b67',
          700: '#474d57',
          800: '#3d4148',
          900: '#383b41',
          950: '#22252a',
        },

        'grey': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#8c8c8c',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#262626',
        },
        'brown': {
          50: '#f8f7f5',
          100: '#e9e7de',
          200: '#d3cfbc',
          300: '#b5b093',
          400: '#94906d',
          500: '#797653',
          600: '#615f40',
          700: '#4f4e36',
          800: '#413f2e',
          900: '#37372a',
          950: '#12120c',
        },

        'green': {
          50: '#f6f7f6',
          100: '#e1e7e0',
          200: '#c3cec1',
          300: '#9dae9a',
          400: '#768d74',
          500: '#5c725a',
          600: '#485b46',
          700: '#3c4a3b',
          800: '#333d32',
          900: '#2d352c',
          950: '#070907',
        },



        green50: "#f3f6f4",
        green100: "#e2e9e3",
        green200: "#c7d3ca",
        green300: "#a0b5a6",
        green400: "#76917e",
        green500: "#516c5a", //<-- main color
        green600: "#415a4a",
        green700: "#34483b",
        green800: "#2b3a31",
        green900: "#243029",
        green950: "#131b16",

        blue50: "#f5f8f8",
        blue100: "#ecf2f3",
        blue200: "#dde5e8",
        blue300: "#c7d5da",
        blue400: "#b0c0c9",
        blue500: "#9bacb9",
        blue600: "#8496a7",
        blue700: "#708090",//<-- main color
        blue800: "#5d6976",
        blue900: "#4e5861",
        blue950: "#2e3438",

        brown50: "#f9f9f1",
        brown100: "#ededd8",
        brown200: "#dadaad",
        brown300: "#c7c582",
        brown400: "#bdb76b",
        brown500: "#ae9f52",
        brown600: "#998346",
        brown700: "#80683d",
        brown800: "#6a5536",
        brown900: "#58462f",
        brown950: "#312517",

      },
    },
  },
  plugins: [],
} satisfies Config;
