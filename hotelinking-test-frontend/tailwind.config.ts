import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-purple": "#6c57f7",
        "purple": "#4a3ca6",
        "cyan": "#00ffff",
        "light-gray": "#f6f5ff",
        "dark-purple": "#47476e",
        "black": "#000000"
      },
    },
  },
  plugins: [],
};
export default config;
