/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060f',
          900: '#0a0b1a',
          800: '#12142b',
          700: '#1b1e3d',
        },
        brand: {
          50: '#eef4ff',
          100: '#dbe6ff',
          200: '#bccfff',
          300: '#8eabff',
          400: '#597dff',
          500: '#3355f6',
          600: '#1f39db',
          700: '#1a2db1',
          800: '#1a288d',
          900: '#1b2872',
        },
        accent: {
          400: '#43e6c8',
          500: '#12cfa9',
          600: '#0aa98a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(51,85,246,0.5)',
        'glow-accent': '0 0 50px -12px rgba(18,207,169,0.45)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
