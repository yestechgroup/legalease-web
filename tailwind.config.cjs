/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#FF0000',
          muted: '#FF6666',
          shifted: '#D40000',
        },
        orange: {
          DEFAULT: '#FFA500',
          muted: '#FF9966',
          shifted: '#D46600',
        },
        yellow: {
          DEFAULT: '#FFFF00',
          muted: '#FFE466',
          shifted: '#DCD400',
        },
        green: {
          DEFAULT: '#00FF00',
          muted: '#66FF66',
          shifted: '#00D400',
        },
        blue: {
          DEFAULT: '#0000FF',
          muted: '#6666FF',
          shifted: '#0000D4',
        },
        indigo: {
          DEFAULT: '#4B0082',
          muted: '#660066',
          shifted: '#420042',
        },
        violet: {
          DEFAULT: '#9900FF',
          muted: '#9966FF',
          shifted: '#6600D4',
        },
        white: {
          DEFAULT: '#FFFFFF',
          muted: '#EEEEEE',
          shifted: '#DDDDDD',
        },
        black: {
          DEFAULT: '#000000',
          muted: '#666666',
          shifted: '#424242',
        },
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
