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
            color: 'var(--color-text)',
            lineHeight: '1.85',
            fontSize: '1.1rem',
            '--tw-prose-body': 'var(--color-text)',
            '--tw-prose-headings': 'var(--color-text)',
            '--tw-prose-bold': 'var(--color-text)',
            '--tw-prose-links': 'var(--color-accent)',
            '--tw-prose-quotes': 'var(--color-text-muted)',
            '--tw-prose-quote-borders': 'var(--color-accent)',
            '--tw-prose-hr': 'var(--color-border)',
            a: {
              color: 'var(--color-accent)',
              textDecoration: 'underline',
              '&:hover': {
                color: 'var(--color-accent-hover)',
              },
            },
            h1: {
              fontFamily: 'Rubik, sans-serif',
              fontWeight: '700',
              color: 'var(--color-text)',
            },
            h2: {
              fontFamily: 'Rubik, sans-serif',
              fontWeight: '600',
              color: 'var(--color-text)',
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            h3: {
              fontFamily: 'Rubik, sans-serif',
              fontWeight: '600',
              color: 'var(--color-text)',
            },
            strong: {
              color: 'var(--color-text)',
            },
            blockquote: {
              borderInlineStartColor: 'var(--color-accent)',
              color: 'var(--color-text-muted)',
            },
            hr: {
              borderColor: 'var(--color-border)',
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
