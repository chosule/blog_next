import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        pre: ["var(--font-pre)"],
        suit: ["var(--font-suit)"],
        nanum: ["var(--font-nanum)"],
      },
      colors: {
        neutral: {
          50: "#fafafa",
          80: "#ededed",
          100: "#E4E6E8",
          140: "#a9a9a9",
          145: "#6b7280",
          148: "#e9f5fa",
          150: "#f0f8ff",
          350: "#9EDDFF",
          500: "#1f2e3d",
          550: "#1e90ff",
          600: "#0000ff",
          800: "#ffe716",
          850: "#202428",
          900: "#000",
        },
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    ({ addComponents }: { addComponents: any }) => {
      addComponents({
        ".text-primary": {
          "@apply text-neutral-850 dark:text-neutral-50": "",
        },
        ".bg-primary": {
          "@apply bg-neutral-50 dark:bg-neutral-850": "",
        },
        ".bg-secondary": {
          "@apply bg-neutral-80 dark:bg-neutral-100": "",
        },
        ".toggle-color": {
          "@apply bg-neutral-550 dark:bg-neutral-140": "",
        },
      });
    },
  ],
};
