import type { Config } from 'tailwindcss'


export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        light: '#EBDCB2',
        secondary: '#9ABAFF',
        primary: '#4241B8',
        text: '#171717'
      }
    }
  },
  plugins: []
} satisfies Config
