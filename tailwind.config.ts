import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        ink: "#2B2B2B",
        navy: {
          DEFAULT: "#0E2A4A",
          light: "#3D5A7D",
        },
        paper: "#F5F6F8",
        card: "#ECEEF1",
        line: "rgba(43,43,43,0.12)",
        "line-dark": "rgba(245,246,248,0.16)",
        ember: {
          DEFAULT: "#E66023",
          dark: "#C24E1B",
          light: "#F0925C",
        },
        muted: "#5B6470",
      },
      fontFamily: {
        display: ["var(--font-roboto)", "system-ui", "sans-serif"],
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        draw: {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
