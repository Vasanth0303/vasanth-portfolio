/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f13",
        panel: "#0f1720",
        neon: "#00d48b",
        muted: "#94a3b8",
      },
      boxShadow: {
        glow: "0 8px 40px rgba(0,212,139,0.12)",
        soft: "0 8px 30px rgba(2,6,23,0.6)",
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
