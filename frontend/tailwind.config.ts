import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: {
          100: "#4b3295",
          200: "#7F58B4",
          300: "#6A2ADF",
          400: "#281549",
          500: "#7957AD",
        },
        pink: {
          100: "#FF37FF",
          200: "#D315C4",
        },
        green: {
          100: "#17921B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
