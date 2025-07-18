// tailwind.config.ts
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // dark-mode variant
      addVariant('theme-dark', '[data-theme="dark"] &')
    }),
  ],
}
