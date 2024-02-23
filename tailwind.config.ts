import { fontFamily } from "tailwindcss/defaultTheme"
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
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
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        purpleHot:{
          '400':'#b291f4',
          '500':'#9964ee',
          '600':'#9451e6',
          '700':'#7c31d0',
        },
        pinkeHot:{
          '400':'#ef779f',
          '500':'#e6517e',
          '600':'#d42e58',
          '700':'#b81e40',
        },
        greenHot:{
          '400':'#30d7aa',
          '500':'#0cbd93',
          '600':'#0cbd93',
        },
        greenPastel:{
          '400':'#4dee20',
          '500':'#35d50d',
          '600':'#23ab05',
        },
        browContess:{
          '400':'#d3a096',
          '500':'#ba7264',
          '600':'#aa6558',
        },
        skyHot:{
          '400':'#64b9b4',
          '500':'#379591',
          '600':'#2a7775',
        },
        blueHot:{
          '400': '#649fff',
          '500': '#4079ff',
          '600': '#1f4eff',
        },
        orangeHot:{
          '400': '#f0a847',
          '500': '#eb8b1e',
          '600': '#dd7419',
        },
        hLas:"#35999f",
        greenLemon:"#beee11",
        textSoft: "#b7bac1",
        textSmall:"#57606f",
        bg:"#151c2c",
        bgSoft:"#182237",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config