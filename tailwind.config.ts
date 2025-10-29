import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b"
        }
      },
      boxShadow: {
        card: "0 30px 70px -10px rgba(0,0,0,0.15)",
        badge: "0 10px 30px rgba(16,185,129,0.25)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 10% 10%, rgba(16,185,129,0.12) 0%, rgba(255,255,255,0) 60%), radial-gradient(circle at 80% 0%, rgba(37,99,235,0.08) 0%, rgba(255,255,255,0) 60%)"
      }
    },
  },
  plugins: [],
};
export default config;
