import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080b11",
        surface: {
          50: "#182030",
          100: "#131825",
          200: "#0e131d",
          300: "#0a0e16",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          accent: "rgba(56, 189, 248, 0.25)",
        },
        accent: {
          cyan: "#38bdf8",
          emerald: "#34d399",
          amber: "#fbbf24",
          violet: "#a78bfa",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow": "flow 3s ease-in-out infinite",
      },
      keyframes: {
        flow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
