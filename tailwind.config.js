/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#EAEAE5',
          section: '#C4BEB3',
          detail: '#ADA08F',
          cta: '#9A856A',
          contrast: '#78614A',
          dark: '#3D200F',
          title: '#2C2416',
          body: '#4A3728',
          light: '#F5F0E8',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        dm: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 12px rgba(120, 97, 74, 0.08)',
        'warm-md': '0 4px 24px rgba(120, 97, 74, 0.12)',
        'warm-lg': '0 8px 48px rgba(120, 97, 74, 0.18)',
        'warm-xl': '0 16px 64px rgba(120, 97, 74, 0.22)',
      },
    },
  },
  plugins: [],
}
