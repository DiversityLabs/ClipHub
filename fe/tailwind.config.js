import tailwindAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        nbblue1: '#DAF5F0',
        nbblue2: '#a7dbd8',
        nbblue3: '#87ceeb',
        nbblue4: '#69d2e7',
        nbgreen1: '#b5d2ad',
        nbgreen2: '#bafca2',
        nbgreen3: '#9oee90',
        nbgreen4: '#7fbc8c',
        nborange1: '#fdfd96',
        nborange2: '#ffdb58',
        nborange3: '#f4d738',
        nborange4: '#e3a018',
        nbred1: '#f8d6b3',
        nbred2: '#ffa07a',
        nbred3: '#ff7a5c',
        nbred4: '#ff6b6b',
        nbpink1: '#fcdfff',
        nbpink2: '#ffc0cb',
        nbpink3: '#ffb2ef',
        nbpink4:  '#ff69b4',
        nbpurple1: '#e3dff2',
        nbpurple2: '#c4a1ff',
        nbpurple3: '#a388ee',
        nbpurple4: '#9723c9',
        neopurple: '#5271ff',
        neolightblue: '#549fd7',
        neogreen: '#00bf63',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindAnimate],
};
