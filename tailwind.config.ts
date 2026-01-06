import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'hero-mobile': ['2rem', { lineHeight: '1.2', fontWeight: '800' }],
        'section': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'section-mobile': ['1.75rem', { lineHeight: '1.3', fontWeight: '700' }],
        'subsection': ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subsection-mobile': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        campaign: {
          blue: "hsl(var(--campaign-blue))",
          green: "hsl(var(--campaign-green))",
          navy: "hsl(var(--campaign-navy))",
          charcoal: "hsl(var(--campaign-charcoal))",
          light: "hsl(var(--campaign-light))",
          divider: "hsl(var(--campaign-divider))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsla(88, 55%, 49%, 0.4)" },
          "50%": { boxShadow: "0 0 40px hsla(88, 55%, 49%, 0.6)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-in-right": "slide-in-right 0.3s ease-out forwards",
        "spin-slow": "spin-slow 30s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, hsla(202, 85%, 28%, 0.95) 0%, hsla(88, 55%, 49%, 0.85) 100%)',
        'gradient-button': 'linear-gradient(90deg, hsl(88, 55%, 49%) 0%, hsl(202, 85%, 28%) 100%)',
        'gradient-divider': 'linear-gradient(to right, transparent, hsl(202, 85%, 28%), transparent)',
        'gradient-dark': 'linear-gradient(180deg, hsl(212, 70%, 8%) 0%, hsl(212, 70%, 14%) 100%)',
      },
      boxShadow: {
        'campaign': '0 10px 40px hsla(202, 85%, 28%, 0.15)',
        'campaign-lg': '0 20px 60px hsla(202, 85%, 28%, 0.2)',
        'glow-green': '0 0 40px hsla(88, 55%, 49%, 0.4)',
        'glow-blue': '0 0 40px hsla(202, 85%, 28%, 0.4)',
        'emboss': 'inset 0 -2px 10px rgba(0,0,0,0.2), 0 2px 10px rgba(255,255,255,0.5)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
