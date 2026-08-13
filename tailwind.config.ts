import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#0f172a",
          accent: "#0284c7",
          ice: "#38bdf8",
          card: "#1e293b",
          border: "#334155"
        }
      }
    },
  },
  plugins: [],
};
export default config;
