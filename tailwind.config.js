/** @type {import('tailwindcss').Config} */
const path = require('path')
const colors = require('tailwindcss/colors')
const typography = require("@manishrc/tailwindcss-typography-js");


const fontPrimary = ["Helvetica Now Display", "Helvetica", "Arial", "system-ui", "sans-serif"]
const fontSecondary = ["Georgia", "Times New Roman", "serif"]

const typographyTheme = typography({
  baseFontSize: "24px",
  baseLineHeight: 1.6,
  scaleRatio: 2.3,
  headerFontFamily: fontPrimary,
  bodyFontFamily: fontPrimary,
  bodyWeight: 'normal',
  headerWeight: 'normal'
});

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': fontPrimary,
      'serif': fontSecondary
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: {
        light:"#00e3a3",
        DEFAULT:"#008f6b",
        dark:"#005940"
      },
      blue: {
        light: '#75a9c7',
        DEFAULT: '#0374b8',
        dark: '#15587e',
      },
      background: {
        DEFAULT: "#ffffff"
      },
      gray: {
        DEFAULT: '#222222',
        '50': '#F9FAFB',
        '100': '#F3F4F6',
        '200': '#E5E7EB',
        '300': '#7E7E7E',
        '400': '#505050',
        '500': '#222222',
        '600': '#1A1A1A',
        '700': '#131313',
        '800': '#0B0B0B',
        '900': '#030303'
      },
      red: {
        light: '#fde2e1',
        DEFAULT: '#ef4444',
        dark: '#b91d1b',
      },
      white: "#ffffff",
      black: "#333333"
    },
    extend: {},
    container: false,
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    typographyTheme
  ],
}
