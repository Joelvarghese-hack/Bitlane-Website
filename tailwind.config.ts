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
        /* ============================================================= */
        /* BRAND COLORS — EDIT HEX HERE (mirror in app/globals.css :root) */
        /* orange #FE4436 · deep black #231F20 · pure white #FFFFFF      */
        /* ============================================================= */
        "velocity-red": "#FE4436", // primary orange accent
        "crimson-shadow": "#D62D1E", // accent hover / pressed
        "amber-pulse": "#FE4436", // secondary accent (orange)
        "amber-deep": "#D62D1E",
        ink: "#231F20", // deep black — page background
        surface: "#2C2724", // elevated card
        "surface-2": "#372F2C", // floating card
        paper: "#FFFFFF", // pure white — text / light surfaces
        navy: "#2C2724",
        gold: "#FE4436",
      },
      fontFamily: {
        // Body / subtitles: Open Sauce. Titles: Montserrat.
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        title: ["var(--font-title)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        panel: "0 30px 80px -40px rgba(0, 0, 0, 0.9)",
        glow: "0 24px 70px -30px rgba(254, 68, 54, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
