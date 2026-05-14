import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          deep: '#050505',
          card: '#14110d',
        },
        gold: {
          light: '#ffe28a',
          DEFAULT: '#ffc757',
          deep: '#ff9b3d',
          hover: '#ffd97a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #ffe28a 0%, #ffc757 45%, #ff9b3d 100%)',
      },
      boxShadow: {
        'glass-inner': 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'glass-card': 'inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 20px 50px -20px rgba(0, 0, 0, 0.6)',
        'glow-gold': '0 1px 0 rgba(255, 199, 87, 0.2) inset, 0 30px 80px -20px rgba(255, 199, 87, 0.35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
