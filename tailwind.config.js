// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        backgroundImage: {
          'gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
        },
        animation: {
          'shimmer': 'shimmer 2s linear infinite',
        },
        keyframes: {
          'shimmer': {
            '0%': { 'background-position': '0% 0%' },
            '100%': { 'background-position': '-200% 0%' },
          },
        },
      },
    },
    plugins: [],
  }