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
        secondary: '#9ABAFF',
        primary: '#4241B8',
        background: '#1A1A1D'
      }
    }
  },
  plugins: []
} satisfies Config
