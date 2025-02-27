module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        'base-300': '#D1D5DB',  // You can customize this value
        'base-100': '#F3F4F6',  // You can customize this value
      },
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
