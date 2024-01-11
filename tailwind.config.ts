import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        pre: ["--font-pre"],
        suit: ["--font-suit"],
      },
      colors: {
        black:"#1f2e3d",
        darkBlue:"#0000ff",
        blue: "#9EDDFF",
        skyBlue:"#f0f8ff"
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
