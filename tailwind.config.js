/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#00ff87',
        accent: '#60efff',
        textPrimary: '#f8fafc',
        textSecondary: '#94a3b8',
      },
      animation: {
        'spin': 'spin 8s linear infinite',
        'reverse-spin': 'reverse-spin 12s linear infinite',
        'spin-slow': 'spin 15s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'reverse-spin': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      fontFamily: {
        sans: ['Space Mono', 'monospace'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
