const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: {
          DEFAULT: "hsl(var(--border))"
        },
        input: {
          DEFAULT: "hsl(var(--input))"
        },
        ring: {
          DEFAULT: "hsl(var(--ring))"
        },
        background: {
          DEFAULT: "hsl(var(--background))"
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.border-border-DEFAULT': {
          'border-color': 'hsl(var(--border))'
        },
        '.border-border-DEFAULT\\/50': {
          'border-color': 'hsl(var(--border) / 0.5)'
        },
        '.bg-background-DEFAULT': {
          'background-color': 'hsl(var(--background))'
        },
        '.bg-primary-DEFAULT': {
          'background-color': 'hsl(var(--primary))'
        },
        '.bg-secondary-DEFAULT': {
          'background-color': 'hsl(var(--secondary))'
        },
        '.bg-accent-DEFAULT': {
          'background-color': 'hsl(var(--accent))'
        },
        '.bg-muted-DEFAULT': {
          'background-color': 'hsl(var(--muted))'
        },
        '.bg-destructive-DEFAULT': {
          'background-color': 'hsl(var(--destructive))'
        },
        '.bg-card-DEFAULT': {
          'background-color': 'hsl(var(--card))'
        },
        '.bg-popover-DEFAULT': {
          'background-color': 'hsl(var(--popover))'
        },
        '.text-foreground-DEFAULT': {
          'color': 'hsl(var(--foreground))'
        },
        '.text-primary-DEFAULT': {
          'color': 'hsl(var(--primary))'
        },
        '.text-secondary-DEFAULT': {
          'color': 'hsl(var(--secondary))'
        },
        '.text-accent-DEFAULT': {
          'color': 'hsl(var(--accent))'
        },
        '.text-muted-DEFAULT': {
          'color': 'hsl(var(--muted))'
        },
        '.text-destructive-DEFAULT': {
          'color': 'hsl(var(--destructive))'
        },
        '.text-card-DEFAULT': {
          'color': 'hsl(var(--card))'
        },
        '.text-popover-DEFAULT': {
          'color': 'hsl(var(--popover))'
        },
        '.from-background-DEFAULT': {
          '--tw-gradient-from': 'hsl(var(--background)) var(--tw-gradient-from-position)',
          '--tw-gradient-to': 'hsl(var(--background) / 0) var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)'
        },
        '.from-primary-DEFAULT': {
          '--tw-gradient-from': 'hsl(var(--primary)) var(--tw-gradient-from-position)',
          '--tw-gradient-to': 'hsl(var(--primary) / 0) var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)'
        },
        '.from-secondary-DEFAULT': {
          '--tw-gradient-from': 'hsl(var(--secondary)) var(--tw-gradient-from-position)',
          '--tw-gradient-to': 'hsl(var(--secondary) / 0) var(--tw-gradient-to-position)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)'
        },
        '.to-background-DEFAULT': {
          '--tw-gradient-to': 'hsl(var(--background)) var(--tw-gradient-to-position)'
        },
        '.to-primary-DEFAULT': {
          '--tw-gradient-to': 'hsl(var(--primary)) var(--tw-gradient-to-position)'
        },
        '.to-secondary-DEFAULT': {
          '--tw-gradient-to': 'hsl(var(--secondary)) var(--tw-gradient-to-position)'
        },
        '.to-secondary-DEFAULT\\/50': {
          '--tw-gradient-to': 'hsl(var(--secondary) / 0.5) var(--tw-gradient-to-position)'
        },
        '.to-secondary-DEFAULT\\/20': {
          '--tw-gradient-to': 'hsl(var(--secondary) / 0.2) var(--tw-gradient-to-position)'
        },
        '.ring-primary-DEFAULT': {
          '--tw-ring-color': 'hsl(var(--primary))'
        },
        '.ring-secondary-DEFAULT': {
          '--tw-ring-color': 'hsl(var(--secondary))'
        },
        '.focus\\:ring-secondary-DEFAULT:focus': {
          '--tw-ring-color': 'hsl(var(--secondary))'
        }
      });
    }
  ]
}

