/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
        heading: ['Rubik', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0a0a0a',
          light: '#fafafa',
          card: '#151515',
          'card-light': '#ffffff',
          hover: '#1a1a1a',
          'hover-light': '#f5f5f5',
        },
        content: {
          DEFAULT: '#e5e5e5',
          light: '#171717',
          muted: '#737373',
          'muted-light': '#a3a3a3',
        },
        accent: {
          DEFAULT: '#c084fc',
          hover: '#a855f7',
          soft: 'rgba(192, 132, 252, 0.1)',
        },
        border: {
          DEFAULT: '#262626',
          light: '#e5e5e5',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            direction: 'rtl',
            maxWidth: '72ch',
            color: '#e5e5e5',
            lineHeight: '1.85',
            fontSize: '1.1rem',
            a: {
              color: '#c084fc',
              textDecoration: 'underline',
              '&:hover': {
                color: '#a855f7',
              },
            },
            h1: {
              fontFamily: 'Rubik, sans-serif',
              fontWeight: '700',
              color: '#f5f5f5',
            },
            h2: {
              fontFamily: 'Rubik, sans-serif',
              fontWeight: '600',
              color: '#f5f5f5',
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            h3: {
              fontFamily: 'Rubik, sans-serif',
              fontWeight: '600',
              color: '#f5f5f5',
            },
            strong: {
              color: '#f5f5f5',
            },
            blockquote: {
              borderInlineStartColor: '#c084fc',
              color: '#a3a3a3',
            },
            hr: {
              borderColor: '#262626',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
