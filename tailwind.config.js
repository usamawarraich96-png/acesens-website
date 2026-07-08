/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy / charcoal — hero, footer, base background
        ink: {
          950: '#0B1120',
          900: '#101A2E',
          800: '#16213A',
          700: '#1c2b47',
        },
        // Lighter slate-blue — alternating content sections
        slateblue: {
          700: '#28374F',
          600: '#2E4057',
        },
        // Bright cyan-blue accent — glow, links, highlights, hover
        brand: {
          50: '#eaf6ff',
          100: '#d2ecfe',
          200: '#a9dbfd',
          300: '#7fcbfb',
          400: '#4FC3F7',
          500: '#3FA9F5',
          600: '#2f8fd6',
          700: '#256aa0',
          800: '#1f4f78',
          900: '#1a3a58',
        },
        // Accent kept as an alias of the cyan brand for existing utilities
        accent: {
          400: '#4FC3F7',
          500: '#3FA9F5',
          600: '#2f8fd6',
        },
        // Body / muted text tuned to the brand spec (#AEB8C4)
        slate: {
          200: '#E6EBF1',
          300: '#C7D0DB',
          400: '#AEB8C4',
          500: '#8A94A3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(63,169,245,0.55)',
        'glow-accent': '0 0 50px -12px rgba(79,195,247,0.5)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 42s linear infinite',
      },
    },
  },
  plugins: [],
}
