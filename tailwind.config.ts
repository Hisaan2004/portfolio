// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class", // ✅ This is required!
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
