import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        headerShadow: "0px 4px 12px 0px rgba(207, 207, 207, 0.25)",
      }
    },
    colors: {
      brand: "#359740",
      brandSecondary: "#359740",
      primary: "#4FA083",
      text: "#1F2533",
      textSecondary: "#70737C",
      hover: "#2BB159",
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        "xl": "1150px",
      },
    },
  },
  plugins: [],
};
export default config;
