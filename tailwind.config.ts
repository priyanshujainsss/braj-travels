import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF2F7",
          100: "#D6E0EC",
          200: "#AEC1D9",
          300: "#7E9BBE",
          400: "#4E739F",
          500: "#2E5480",
          600: "#1E3E63",
          700: "#152D4A",
          800: "#0F2036",
          900: "#0A1626",
        },
        saffron: {
          50: "#FCF3E4",
          100: "#F8E4BE",
          200: "#F0CC85",
          300: "#E4B156",
          400: "#D49A38",
          500: "#BD8329",
          600: "#9A6A20",
          700: "#77511A",
        },
        sand: {
          50: "#FDFBF7",
          100: "#F8F3EA",
          200: "#F1E9DA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
