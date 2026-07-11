/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy canvas (design system)
        ink: {
          950: '#07121F', // primary background
          900: '#0D1A2D', // secondary background
          850: '#0F2036',
          800: '#14263F', // surface
          700: '#1B3252',
        },
        // Slightly lifted panel base
        slateblue: {
          800: '#0e1f34',
          700: '#14263F',
          600: '#1d3a5e',
        },
        // Electric blue — primary accent, glows, links, graphs
        brand: {
          50: '#e8f6ff',
          100: '#cdebff',
          200: '#9fd8ff',
          300: '#47D8FF', // bright cyan
          400: '#33b6ff',
          500: '#1A9DFF', // primary blue
          600: '#1580d6',
          700: '#125fa0',
          800: '#124b7d',
          900: '#123c63',
        },
        // Vivid orange — emphasis, hover, key metrics only
        accent: {
          100: '#ffe8d5',
          200: '#ffcba3',
          300: '#ffab6b',
          400: '#ff9440',
          500: '#FF7A1A',
          600: '#e5630c',
        },
        // Chrome tones for the logo/metallic accents
        chrome: {
          light: '#ECECEC',
          mid: '#C9CDD3',
          dark: '#7F8998',
        },
        // Body / muted text
        slate: {
          200: '#E7ECF6',
          300: '#C3CCE0',
          400: '#A8B3C8', // text secondary
          500: '#7F8998',
        },
        success: '#00D084',
        danger: '#FF5E57',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem', // 16px — single consistent card radius
      },
      boxShadow: {
        glow: '0 0 44px -8px rgba(26,157,255,0.55)',
        'glow-accent': '0 0 34px -8px rgba(255,122,26,0.55)',
        glass:
          '0 18px 50px -18px rgba(0,0,0,0.75), inset 0 1px 0 0 rgba(255,255,255,0.14)',
        'glass-lg':
          '0 30px 80px -24px rgba(0,0,0,0.85), inset 0 1px 0 0 rgba(255,255,255,0.16)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(26,157,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,157,255,0.06) 1px, transparent 1px)',
        'circuit':
          'radial-gradient(circle at 18% 18%, rgba(26,157,255,0.14), transparent 42%), radial-gradient(circle at 82% 62%, rgba(255,122,26,0.09), transparent 42%)',
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
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)', opacity: '0' },
          '18%': { opacity: '0.55' },
          '40%, 100%': { transform: 'translateX(320%) skewX(-18deg)', opacity: '0' },
        },
        shaft: {
          '0%, 100%': { opacity: '0.25', transform: 'translateX(-8%)' },
          '50%': { opacity: '0.6', transform: 'translateX(8%)' },
        },
        traveller: {
          '0%': { transform: 'translateX(-30%)', opacity: '0' },
          '10%, 80%': { opacity: '1' },
          '100%': { transform: 'translateX(130%)', opacity: '0' },
        },
        spin12: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        marquee: 'marquee 42s linear infinite',
        pan: 'pan 7s ease-in-out infinite',
        shaft: 'shaft 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
