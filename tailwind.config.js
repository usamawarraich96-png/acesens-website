/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Very dark navy-black — used throughout
        ink: {
          950: '#070B18',
          900: '#0A0F22',
          850: '#0C1228',
          800: '#101833',
          700: '#162042',
        },
        // Slightly lifted panel base
        slateblue: {
          800: '#0e152b',
          700: '#131b36',
          600: '#1b2547',
        },
        // Electric blue — glows, links, icons, graphs, secondary accents
        brand: {
          50: '#eef4ff',
          100: '#dceafe',
          200: '#bcd3fd',
          300: '#93b4fd',
          400: '#6690fa',
          500: '#4f7df7',
          600: '#3a63d8',
          700: '#2d4dab',
          800: '#253e87',
          900: '#20346c',
        },
        // Warm clay orange (Claude-logo tone) — CTAs, labels, highlights
        accent: {
          100: '#f9ece5',
          200: '#f0cfc0',
          300: '#e7ac93',
          400: '#e08b64',
          500: '#d97757',
          600: '#c25d3f',
        },
        // Body / muted text — light blue-grey
        slate: {
          200: '#E7ECF6',
          300: '#C3CCE0',
          400: '#9AA6C0',
          500: '#75809B',
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
        glow: '0 0 40px -10px rgba(79,125,247,0.55)',
        'glow-accent': '0 0 34px -8px rgba(217,119,87,0.55)',
        glass:
          '0 10px 40px -14px rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.14)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(102,144,250,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(102,144,250,0.05) 1px, transparent 1px)',
        'circuit':
          'radial-gradient(circle at 18% 18%, rgba(79,125,247,0.11), transparent 42%), radial-gradient(circle at 82% 62%, rgba(217,119,87,0.10), transparent 42%)',
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
        pan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 42s linear infinite',
        pan: 'pan 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
