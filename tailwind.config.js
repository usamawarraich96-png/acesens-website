/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Very dark navy-black — used throughout
        ink: {
          950: '#050B14',
          900: '#070E1A',
          850: '#0A1220',
          800: '#0e1728',
          700: '#152238',
        },
        // Slightly lifted glass-panel base
        slateblue: {
          800: '#0d1626',
          700: '#132038',
          600: '#1a2b48',
        },
        // Rich medium-blue accent — buttons, links, glow, gradients
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#4FA3F5',
          500: '#3B82F6',
          600: '#2f6fd6',
          700: '#2559ac',
          800: '#1e478a',
          900: '#1b3a6e',
        },
        // Accent kept as an alias of the blue brand for existing utilities
        accent: {
          400: '#4FA3F5',
          500: '#3B82F6',
          600: '#2f6fd6',
        },
        // Body / muted text — light grey-blue
        slate: {
          200: '#E8EEF6',
          300: '#C7D2E0',
          400: '#9FB0C6',
          500: '#7A8AA3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(59,130,246,0.6)',
        'glow-accent': '0 0 45px -10px rgba(79,163,245,0.55)',
        glass: '0 8px 40px -12px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(96,165,250,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,165,250,0.06) 1px, transparent 1px)',
        'circuit':
          'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.10), transparent 40%), radial-gradient(circle at 80% 60%, rgba(79,163,245,0.08), transparent 45%)',
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
