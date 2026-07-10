/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Very dark green-black — used throughout
        ink: {
          950: '#050B09',
          900: '#07110D',
          850: '#0A1512',
          800: '#0D1B16',
          700: '#12241D',
        },
        // Slightly lifted glass-panel base
        slateblue: {
          800: '#0c1a14',
          700: '#11241C',
          600: '#173226',
        },
        // Soft luminous green accent — buttons, links, glow, gradients
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Accent kept as an alias of the green brand for existing utilities
        accent: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        // Body / muted text — light grey with a green cast
        slate: {
          200: '#E9F2ED',
          300: '#C6D6CD',
          400: '#9FB5A9',
          500: '#79907F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem', // 16px — single consistent card radius
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(52,211,153,0.5)',
        'glow-accent': '0 0 30px -8px rgba(110,231,183,0.45)',
        glass:
          '0 10px 40px -14px rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.14)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(110,231,183,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(110,231,183,0.055) 1px, transparent 1px)',
        'circuit':
          'radial-gradient(circle at 20% 20%, rgba(16,185,129,0.10), transparent 40%), radial-gradient(circle at 80% 60%, rgba(110,231,183,0.07), transparent 45%)',
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
