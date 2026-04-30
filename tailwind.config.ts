import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171511",
        gold: {
          50: "#fbf7ed",
          100: "#f4e8c9",
          200: "#e8d094",
          300: "#d8b35e",
          400: "#c79a37",
          500: "#a87924",
          600: "#875c1c",
          700: "#67451b",
          800: "#483119",
          900: "#2d2114"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(45, 33, 20, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
