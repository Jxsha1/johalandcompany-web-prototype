/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        corporate: {
          navy: '#0b132b',
          darkBlue: '#1c2541',
          premiumBlue: '#3a506b',
          accentIce: '#5bc0be',
          slateLight: '#f8fafc',
          slateText: '#475569'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
