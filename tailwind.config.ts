import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "velocity-red": "#E63946",
        "crimson-shadow": "#8B1E2D",
        "amber-pulse": "#F4A261",
        "amber-deep": "#C77B3F",
        ink: "#050506",
        surface: "#0F1015",
        "surface-2": "#16161D",
        paper: "#F5F1E8",
        navy: "#1A2B4A",
        gold: "#C9A961",
      },
      fontFamily: {
        sans: ["var(--font-bricolage)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        panel: "0 30px 80px -40px rgba(0, 0, 0, 0.9)",
        glow: "0 24px 70px -30px rgba(230, 57, 70, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
