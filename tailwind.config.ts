import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 24px 70px -34px rgba(11, 95, 165, 0.24), 0 18px 40px -26px rgba(15, 23, 42, 0.18)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(15, 23, 42, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
